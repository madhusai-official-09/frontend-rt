"use client";

import React, { useRef, useState, useEffect } from "react";

export default function CameraDetectionSplit() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [annotatedSrc, setAnnotatedSrc] = useState<string | null>(null);
  const WS =
  typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_WS_URL!
    : "";


  useEffect(() => () => wsRef.current?.close(), []);

  const start = async () => {
    setLoading(true);
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      streamRef.current = s;
      if (videoRef.current) videoRef.current.srcObject = s;

      wsRef.current = new WebSocket(WS);
      wsRef.current.binaryType = "arraybuffer";
      wsRef.current.onopen = () => { setStarted(true); setLoading(false); captureLoop(); };
      wsRef.current.onmessage = (e) => {
        if (typeof e.data !== "string") {
          const blob = new Blob([e.data], { type: "image/jpeg" });
          const url = URL.createObjectURL(blob);
          // revoke previous to avoid leaks
          const old = annotatedSrc;
          setAnnotatedSrc(url);
          if (old) URL.revokeObjectURL(old);
        }
      };
      wsRef.current.onclose = () => { setStarted(false); setLoading(false); };
    } catch (err) {
      alert("Allow camera access and try again.");
      setLoading(false);
    }
  };

  const stop = () => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    wsRef.current?.close();
    wsRef.current = null;
    setStarted(false);
    if (annotatedSrc) { URL.revokeObjectURL(annotatedSrc); setAnnotatedSrc(null); }
    setLoading(false);
  };

  const captureLoop = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const send = async () => {
      if (!videoRef.current || !ctx || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
      const v = videoRef.current;
      canvas.width = v.videoWidth || 320;
      canvas.height = v.videoHeight || 240;
      ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(b => b && wsRef.current!.send(b), "image/jpeg", 0.6);
      setTimeout(send, 250);
    };
    send();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between bg-[#041014] p-4 rounded">
        <div className="text-white">
          <div className="font-semibold">Real-Time Object Detection</div>
          <div className="text-sm text-gray-400">Camera & Object Preview</div>
        </div>

        <div>
          {!started ? (
            <button onClick={start} disabled={loading} className="px-4 py-2 bg-red-600 text-black rounded">
              {loading ? "Starting…" : "Start"}
            </button>
          ) : (
            <button onClick={stop} className="px-4 py-2 bg-red-600 text-black rounded">Stop</button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video Box */}
        <div className="bg-[#061014] p-4 rounded border border-cyan-600/20">
          <h4 className="text-white font-semibold mb-3">Live Camera</h4>
          <div className="relative bg-black rounded-lg overflow-hidden h-80 flex items-center justify-center">
            <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
            {!started && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h5 className="text-white text-lg font-medium">Camera Ready</h5>
                <p className="text-gray-400 mt-2">Click <span className="text-red-500">Start</span></p>
              </div>
            )}
            {started && <div className="absolute left-3 bottom-3 bg-black/60 text-xs text-white px-2 py-1 rounded">streaming...</div>}
          </div>
        </div>

        {/* Detection Box */}
        <div className="bg-[#061014] p-4 rounded border border-cyan-600/20">
          <h4 className="text-white font-semibold mb-3">Object Preview</h4>
          <div className="bg-black rounded-lg overflow-hidden h-80 flex items-center justify-center">
            {annotatedSrc ? (
              <img src={annotatedSrc} alt="Object Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center text-gray-400">
                <div className="text-sm">No detection yet</div>
                <div className="text-xs mt-2">Start the camera to see object preview</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
