import React from 'react'
import Hero from './Hero/Hero'
import Detection from './Works/Works'
import DetectionPage from '@/app/detection/page'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Detection />
      
    </div>
  )
}

export default Home