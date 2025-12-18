"use client";

import React from "react";
import { SiSpinnaker } from "react-icons/si";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        <video
          src="/images/ai logo.mp4"
          autoPlay
          loop
          muted
          playsInline
          width={350}
          height={350}
          className="rounded-full border-4 border-[#0c0c48aa]"
        />

        <p className="mt-6 max-w-[750px] px-4 text-center text-gray-500 text-lg leading-relaxed">
          Unlock the future of visual intelligence — AI that detects, tracks, and
          analyzes everything from objects to gestures to full-body poses.
        </p>

        <button className="mt-10 px-11 py-4 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-lg font-medium">
          Start Detection
          <SiSpinnaker className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
