// components/ParticlesHero.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesHero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          // Use both bubble (glow/size/color) and repulse (movement) on hover
          onHover: { enable: true, mode: ["bubble", "repulse"] },
          // typed shape: `resize` must be an object
          resize: { enable: true },
        },
        modes: {
          push: { quantity: 4 },
          // Repulse makes particles move away quickly from cursor (gives perceived speed)
          repulse: { distance: 140, duration: 0.45 },
          // Bubble provides glow / size / color change near cursor
          bubble: {
            distance: 160,
            size: 18, // grows near cursor
            duration: 0.35,
            opacity: 1,
            // change color to a bright red when hovered (glow)
            color: { value: "#ff8f8f" },
          },
        },
        // small parallax effect so the canvas responds visually to pointer movement
        // (parallax is nested under interactivity by tsParticles)
        // Note: some versions expect interactivity.modes.parallax, some interactivity.parallax
        // we add the commonly supported shape here:
        parallax: {
          enable: true,
          force: 30, // larger -> stronger displacement
          smooth: 10, // smoothing factor
        } as any,
      },
      particles: {
        color: { value: "#ff3b3b" }, // base red
        links: {
          color: "#ff3b3b",
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 1.2,
          // triangles option if your installed preset supports it will create filled faces
          // triangles: { enable: true, color: { value: "#ff3b3b" }, opacity: 0.06 },
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          // base speed is slightly higher so repulse looks snappy
          speed: 2,
        },
        number: {
          density: { enable: true, area: 900 },
          value: 80, // increased count -> more triangles/connectivity
        },
        opacity: { value: 0.7 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0"
    />
  );
}
