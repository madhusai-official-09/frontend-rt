import React from 'react'
import WorksCard from './WorksCard'

const Detection = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text:4xl xl:text-5xl font-bold text-white'>How it works</h1>
        <p className='mt-6 mx-auto max-w-[750px] px-4 text-center text-gray-500 text-lg sm:text-xm leading-relaxed'>Follow three quick steps to get accurate AI detection results.</p>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 items-center'>
          <div>
            <WorksCard 
            icon="/images/n1.png" 
            name="Turn On Your Camera" 
            description="Start your stream with one click — we handle all the setup for smooth detection." />
          </div>
          <div>
            <WorksCard 
            icon="/images/n2.png" 
            name="Let the AI Analyze" 
            description="Our system checks every frame in real time, spotting faces, objects, gestures, and more." />
          </div>
          <div>
            <WorksCard 
            icon="/images/n3.png" 
            name="Watch It Happen Live" 
            description="See results appear right on your screen as the AI keeps detecting continuously." />
          </div>
        </div>
    </div>
  )
}

export default Detection