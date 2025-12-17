import React from 'react'
import CameraDetectionBox from '@/components/CameraDetectionBox'

const DetectionPage = () => {
  return (
    <div className="pt-40 pb-40 min-h-screen bg-[#020405]">
      <h1 className="text-center text-3xl md:text-5xl xl:text-6xl font-extrabold text-white">
        Object 
        <span className="bg-gradient-to-r from-red-500 via-red-700 to-red-400 bg-clip-text text-transparent animate-[redGradient_6s_ease_infinite]">
          Detection
        </span>
      </h1>

      <p className="mt-6 text-center text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Use your Camera for Real-time Object Detection
      </p>

      <CameraDetectionBox />
    </div>
    
  );
};

export default DetectionPage;
