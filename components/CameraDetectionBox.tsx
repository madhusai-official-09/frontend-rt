"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export default function CameraDetectionSplit() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const runningRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const waitingForResponseRef = useRef(false);

  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [annotatedSrc, setAnnotatedSrc] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

  const WS =
    typeof window !== "undefined" ? process.env.NEXT_PUBLIC_WS_URL || "" : "";

  useEffect(() => {
    return () => {
      runningRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      wsRef.current?.close();
      wsRef.current = null;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const captureLoop = useCallback(() => {
    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 640;
    canvas.height = 480;

    waitingForResponseRef.current = false;

    const send = () => {
      if (
        !runningRef.current ||
        !videoRef.current ||
        !ctx ||
        !wsRef.current ||
        wsRef.current.readyState !== WebSocket.OPEN
      ) {
        return;
      }

      if (waitingForResponseRef.current) {
        timeoutRef.current = setTimeout(send, 30);
        return;
      }

      const v = videoRef.current;
      if (v.readyState >= 2) {
        ctx.drawImage(v, 0, 0, 640, 480);
        canvas.toBlob(
          (blob) => {
            if (blob && wsRef.current?.readyState === WebSocket.OPEN) {
              waitingForResponseRef.current = true;
              wsRef.current.send(blob);
            }
          },
          "image/jpeg",
          0.5
        );
      }

      timeoutRef.current = setTimeout(send, 30);
    };

    send();
  }, []);

  const start = async () => {
    setLoading(true);
    setErrorMsg(null);

    if (!WS) {
      setErrorMsg("WebSocket URL not configured (NEXT_PUBLIC_WS_URL missing).");
      setLoading(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: facingMode },
          width: { ideal: 640 },
          height: { ideal: 480 },
        },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => {});
      }

      console.log("Connecting to:", WS);
      const ws = new WebSocket(WS);
      ws.binaryType = "arraybuffer";
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("Connected");
        runningRef.current = true;
        setStarted(true);
        setLoading(false);
        captureLoop();
      };

      ws.onmessage = (e) => {
        if (typeof e.data !== "string") {
          console.log("Frame received");
          waitingForResponseRef.current = false;
          const blob = new Blob([e.data], { type: "image/jpeg" });
          const url = URL.createObjectURL(blob);
          setAnnotatedSrc((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return url;
          });
        }
      };

      ws.onerror = (e) => {
        console.error("WebSocket Error", e);
        setErrorMsg("WebSocket connection error. Check console for details.");
      };

      ws.onclose = (e) => {
        console.log("Socket Closed", e.code, e.reason);
        runningRef.current = false;
        setStarted(false);
        setLoading(false);
      };
    } catch (err) {
      console.error(err);
      setErrorMsg("Please allow camera access.");
      setLoading(false);
    }
  };

  const stop = () => {
    runningRef.current = false;
    waitingForResponseRef.current = false;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStarted(false);

    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    wsRef.current?.close();
    wsRef.current = null;

    if (annotatedSrc) {
      URL.revokeObjectURL(annotatedSrc);
      setAnnotatedSrc(null);
    }

    setLoading(false);
  };

  const flipCamera = async () => {
    if (loading) return;

    const wasRunning = started;

    stop();

    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));

    setTimeout(() => {
      if (wasRunning) {
        start();
      }
    }, 300);
  };

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between bg-[#041014] rounded-xl p-4 gap-4">
        <div className="text-white">
          <div className="font-semibold">Real-Time Object Detection</div>
          <div className="text-sm text-gray-400">Camera & Object Preview</div>
        </div>

        <div className="grid grid-cols-3 sm:flex gap-2 w-full sm:w-auto">
          <button
            onClick={start}
            disabled={loading || started}
            className="px-4 py-2 rounded bg-red-600 text-black font-semibold hover:bg-red-500 disabled:opacity-40 transition"
          >
            {loading ? "Starting..." : "Start"}
          </button>

          <button
            onClick={stop}
            disabled={!started}
            className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-40 transition"
          >
            Stop
          </button>

          <button
            onClick={flipCamera}
            className="px-4 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-500 transition"
          >
            Flip
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="bg-red-950/60 border border-red-700 text-red-200 text-sm px-4 py-2 rounded">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Live Camera */}
        <div className="bg-[#061014] rounded-xl p-3 sm:p-4 border border-cyan-600/20 shadow-lg">
          <h4 className="text-white font-semibold mb-3">Live Camera</h4>
          <div className="relative bg-black rounded-lg overflow-hidden aspect-video sm:aspect-[4/3] w-full flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-contain bg-black"
            />
            {!started && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h5 className="text-white text-lg font-medium">Camera Ready</h5>
                <p className="text-gray-400 mt-2">
                  Click <span className="text-red-500">Start</span>
                </p>
              </div>
            )}
            {started && (
              <div className="absolute left-3 bottom-3 flex items-center gap-2 bg-black/60 text-xs text-white px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                streaming…
              </div>
            )}
          </div>
        </div>

        {/* Detection Preview */}
        <div className="bg-[#061014] rounded-xl p-3 sm:p-4 border border-cyan-600/20 shadow-lg">
          <h4 className="text-white font-semibold mb-3">Object Preview</h4>
          <div className="bg-black rounded-lg overflow-hidden aspect-video sm:aspect-[4/3] w-full flex items-center justify-center">
            {annotatedSrc ? (
              <img
                src={annotatedSrc}
                alt="Detection"
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <div className="text-center text-gray-400 px-4">
                <div className="text-sm">No detection yet</div>
                <div className="text-xs mt-2">
                  Start the camera to see results
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
