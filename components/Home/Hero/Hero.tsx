import { Spinner } from '@/components/ui/spinner'
import { VideoIcon } from 'lucide-react'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { CgSpinner, CgSpinnerTwoAlt } from 'react-icons/cg'
import { FaSpinner } from 'react-icons/fa'
import { ImSpinner8, ImSpinner9 } from 'react-icons/im'
import { PiShippingContainer, PiSpinnerBallFill, PiSpinnerGap, PiSpinnerGapFill, PiSpinnerThin } from 'react-icons/pi'
import { SiOpencontainersinitiative, SiSpinnaker } from 'react-icons/si'
import { TbFidgetSpinner } from 'react-icons/tb'
import ParticlesHero from './ParticleBackground'

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
 
 <ParticlesHero/>

    <div className='relative z-10 flex flex-col items-center overflow-visible'>
        <video src="/images/ai logo.mp4" autoPlay loop muted playsInline width={350} height={350} className='rounded-full border-4 border-[#0c0c48aa]'/>
        <span>
        <p className="mt-6 mx-auto max-w-[750px] px-4 text-center text-gray-500 text-lg sm:text-xm leading-relaxed">
  Unlock the future of visual intelligence — AI that detects, tracks, and analyzes everything from objects to gestures to full-body poses. Real-time. Ultra-accurate. Mind-blowingly fast.
</p>
</span>
<button className='mt-10 px-11 py-4 bg-red-600 hover:bg-red-700 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
    Start Detection
<SiSpinnaker className="w-5 h-5 ml-2 inline-block"/>
</button>
    </div>
    </div>
  )
}

export default Hero