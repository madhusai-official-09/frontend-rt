import { BrainIcon, Code2Icon, CodeIcon, GithubIcon, LinkedinIcon, NetworkIcon, ScanFaceIcon, TargetIcon } from 'lucide-react'
import React from 'react'
import { BiCamera, BiChip } from 'react-icons/bi'
import { BsLightning } from 'react-icons/bs'
import { DiVisualstudio } from 'react-icons/di'
import { FaThinkPeaks } from 'react-icons/fa'
import { GiThink } from 'react-icons/gi'
import { LiaThinkPeaks } from 'react-icons/lia'
import { PiDetective } from 'react-icons/pi'
import { SiThinkpad } from 'react-icons/si'

const AboutPage = () => {
  return (
    <div className='pt-40 pb-40'>
      <h1 className='text-center text-3xl md:text-5xl xl:text-6xl font-extrabold text-white'>About <span className='bg-gradient-to-r from-red-500 via-red-700 to-red-400 bg-clip-text text-transparent animate-[redGradient_6s_ease_infinite]'>DetectionAI</span> </h1>
    <p className="mt-6 text-center text-sm md:text-sm xl:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
  Step into the future of visual intelligence. DetectionAI combines cutting-edge deep-learning
  models to deliver powerful capabilities—Object Detection, Gesture Control, Hand & Face
  Landmarks, and Dynamic Pose Tracking. Built for creators, developers, and innovators shaping
  tomorrow.
</p>
    <div
  className="
    mt-12 bg-[#0c1124] border border-red-500
    rounded-2xl p-8 md:p-10 max-w-4xl mx-auto
    shadow-md shadow-blue-500/5
    transform transition-all duration-300
    hover:scale-[1.02] hover:shadow-blue-500/10 hover:-translate-y-1
  "
>
  <h2 className="flex items-center gap-3 text-white text-xl font-semibold">
    <GiThink className="text-red-600 hover:scale-[1.02] hover:shadow-blue-500/10 hover:-translate-y-1 transform transition-all duration-300" /> Why DetectionAI?
  </h2>

  <p className="mt-4 text-gray-400 leading-relaxed">
    DetectionAI is built for creators who want powerful, production-ready computer vision tools
    without the complexity. Our platform delivers fast, intuitive, and highly accurate AI detection
    across multiple specialized modes.
  </p>

  <ul className="mt-4 text-gray-400 leading-relaxed list-disc pl-6 space-y-1">
    <li>Real-time object detection and gesture analysis</li>
    <li>High-precision face and hand landmark tracking</li>
    <li>Flexible APIs suitable for web, mobile, and enterprise systems</li>
  </ul>
</div>
{/* System Architecture Simple Section */}
<div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

  {/* Camera Input */}
  <div className="bg-[#0b0f1a] border border-red-600 rounded-xl p-6 text-center
      transform transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1">
    
    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-red-900/30
        rounded-xl transition-all duration-300 icon-spin hover:scale-110">
      <BiCamera className="text-red-500 w-8 h-8" />
    </div>

    <h3 className="text-white font-semibold text-lg">Camera Input</h3>
    <p className="text-gray-400 text-sm mt-2">
      Reads video directly from your browser with WebRTC.
    </p>
  </div>

  {/* Local AI Processing */}
  <div className="bg-[#0b0f1a] border border-red-600 rounded-xl p-6 text-center
      transform transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1">
    
    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-red-900/30
        rounded-xl transition-all duration-300 icon-spin hover:scale-110">
      <ScanFaceIcon className="text-red-500 w-8 h-8" />
    </div>

    <h3 className="text-white font-semibold text-lg">Local AI Processing</h3>
    <p className="text-gray-400 text-sm mt-2">
      Fast model inference processed locally for privacy.
    </p>
  </div>

  {/* Real-time Visualization */}
  <div className="bg-[#0b0f1a] border border-red-600 rounded-xl p-6 text-center
      transform transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1">

    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-red-900/30
        rounded-xl transition-all duration-300 icon-spin hover:scale-110">
      <PiDetective className="text-red-500 w-8 h-8" />
    </div>

    <h3 className="text-white font-semibold text-lg">Real-time Visualization</h3>
    <p className="text-gray-400 text-sm mt-2">
      Results shown instantly with overlays and confidence.
    </p>
  </div>

</div>
<div className='pt-40 pb-40'>
  <h2 className='text-center text-1xl md:text-3xl xl:text-4xl font-extrabold text-white'>Technology <span className='bg-gradient-to-r from-red-500 via-red-700 to-red-400 bg-clip-text text-transparent animate-[redGradient_6s_ease_infinite]'>Used</span> </h2>
  <p className='mt-6 text-center text-sm md:text-sm xl:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed'>Developed using powerful technologies that keep every detection mode fast, stable, and ready to grow as your needs increase.</p>
{/* TECHNOLOGY STACK SECTION */}
<div className="w-full flex justify-center px-4 mt-20 pb-32">

  {/* CENTERED CONTAINER */}
  <div className="w-full max-w-6xl bg-[#0b0f1a] border border-red-600 rounded-2xl p-10 
      shadow-md shadow-red-500/5">

    {/* Section Title */}
   <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-extrabold text-white">
  <Code2Icon className="w-8 h-8 text-red-500" />
  Technology <span className="bg-gradient-to-r from-red-500 via-red-700 to-red-400 
  bg-clip-text text-transparent animate-[redGradient_6s_ease_infinite]">Used</span>
</h2>


    {/* GRID */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* FRONTEND */}
      <div className="bg-[#0c1124] border border-red-500/40 rounded-xl p-6
          hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
        <h3 className="flex items-center gap-2 text-white text-lg font-semibold">
          <NetworkIcon className="text-red-500" /> Frontend
        </h3>
        <ul className="mt-4 text-gray-400 text-sm space-y-2">
          {["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"].map((item, i) => (
            <li key={i} className='transition-all duration-300 hover:text-red-500 hover:scale-[1.05] cursor-pointer'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* AI & ML */}
      <div className="bg-[#0c1124] border border-red-500/40 rounded-xl p-6
          hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
        <h3 className="flex items-center gap-2 text-white text-lg font-semibold">
          <BrainIcon className="text-red-500" /> AI & ML
        </h3>
        <ul className="mt-4 text-gray-400 text-sm space-y-2">
          {["MediaPipe", "TensorFlow.js", "WebRTC", "Computer Vision"].map((item, i) => (
            <li key={i} className='transition-all duration-300 hover:text-red-500 hover:scale-[1.05] cursor-pointer'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* BACKEND */}
      <div className="bg-[#0c1124] border border-red-500/40 rounded-xl p-6
          hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
        <h3 className="flex items-center gap-2 text-white text-lg font-semibold">
          <BiChip className="text-red-500" /> Backend
        </h3>
        <ul className="mt-4 text-gray-400 text-sm space-y-2">
          {["Next.js API", "Resend API", "Local Processing", "Browser APIs"].map((item, i) => (
            <li key={i} className='transition-all duration-300 hover:text-red-500 hover:scale-[1.05] cursor-pointer'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* INFRASTRUCTURE */}
      <div className="bg-[#0c1124] border border-red-500/40 rounded-xl p-6
          hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
        <h3 className="flex items-center gap-2 text-white text-lg font-semibold">
          <BsLightning className="text-red-500" /> Infrastructure
        </h3>
        <ul className="mt-4 text-gray-400 text-sm space-y-2">
  {["Vercel", "Edge Runtime", "NPM Modules", "Email Service"].map((item, i) => (
    <li
      key={i}
      className="transition-all duration-300 hover:text-red-500 hover:scale-[1.05] cursor-pointer">
      {item}
    </li>
  ))}
</ul>
      </div>
    </div>
  </div>
</div>
<div className='pt-5 pb-5'>
  <h2 className='text-center text-1xl md:text-3xl xl:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-red-700 to-red-400 bg-clip-text text-transparent animate-[redGradient_6s_ease_infinite]'>Developer</h2>
  <p className='mt-6 text-center text-sm md:text-sm xl:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed'>Building intelligent visual technology that understands and interacts with the world.</p>
<div
  className="mt-12 max-w-4xl mx-auto bg-[#15060b] border border-red-700 rounded-2xl p-8 md:p-10
             shadow-lg shadow-red-800/20 overflow-hidden"
>
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Avatar */}
    <div className="flex-shrink-0">
      <div className="w-36 h-36 rounded-full overflow-hidden ring-1 ring-red-500/60
                      border-2 border-red-700/80">
        {/* Replace src with your image path */}
        <img
          src="/images/profilepics.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Info */}
    <div className="flex-1 text-left">
      {/* Name (script-like) */}
      <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white
                     font-[\'GreatVibes\',cursive] italic">
        Pitani Madhusayi
      </h3>

      {/* Role */}
      <p className="mt-2 text-sm md:text-base text-gray-400/70 font-semibold">
        Full-Stack AI Engineer
      </p>

      {/* Description */}
      <p className="mt-4 text-sm md:text-base text-gray-400/70 max-w-2xl leading-relaxed">
        Specialist in computer vision, deep learning, and full-stack development.
        Passionate about creating comprehensive AI detection platforms that make
        advanced technology accessible through intuitive interfaces and privacy-focused
        architecture.
      </p>

      {/* Action buttons */}
      <div className="mt-6 flex items-center gap-3 flex-wrap">
        {/* Portfolio button */}
        <a
          href="https://portfolio-rust-one-56mja0eudc.vercel.app"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600
                     text-white text-sm font-medium shadow-sm hover:translate-y-[-2px] transform transition-all duration-200"
        >
          <Code2Icon className="w-4 h-4" />
          Portfolio
        </a>

        {/* Small icon buttons */}
        <a
          href="https://github.com/madhusai-official-09"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0b1120] border border-red-700/40
                     text-red-400 hover:bg-red-700/10 hover:text-red-500 transition-all duration-200"
          aria-label="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/pitanimadhusayi"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0b1120] border border-red-700/40
                     text-blue-300 hover:bg-blue-800/10 hover:text-red-500 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>

        <a
          href="mailto:madhusaipitani95@gmail.com"
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0b1120] border border-red-700/40
                     text-red-300 hover:bg-red-700/10 hover:text-red-500 transition-all duration-200"
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

  </div>  
</div>
    </div>
    
  )
}

export default AboutPage