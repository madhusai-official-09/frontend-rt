import { ContactIcon } from 'lucide-react'
import React from 'react'
import { BiEnvelope, BiLogoLinkedin, BiMap, BiMapPin, BiPhone } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

const ContactPage = () => {
  return (
    <div className='pt-40 pb-40 '>
      <div className='text-center text-3xl md:text-5xl xl:text-6xl'>
        {/*Text Content*/}
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>Connect With Me</h1>
          <p className='text-gray-500 mt-6 text-base sm:text-lg '>Let’s connect and see how I can assist you in achieving your goals.</p>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20">
  <div className="w-full max-w-3xl bg-black/40 border border-red-500/30 rounded-2xl p-8 shadow-xl backdrop-blur-md">

    {/* Heading */}
    <div className="flex items-center gap-3 mb-8">
      <span className="text-red-500 text-1xl"><ContactIcon/></span>
      <h2 className="text-lg font-semibold text-white">Reach Out</h2>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4 mb-6">
      <span className="text-red-500 text-3xl"><BiPhone/></span>
      <div>
        <p className="text-gray-200 font-semibold text-lg">Phone</p>
        <p className="text-gray-400 text-sm">
          <a href="=tel:+91 8247842565">+91 8247842565</a></p>
      </div>
    </div>

    {/* Email*/}
    <div className="flex items-center gap-4 mb-6">
      <span className="text-red-500 text-3xl"><BiEnvelope/></span>
      <div>
        <p className="text-gray-200 font-semibold text-lg">Email</p>
        <p className="text-gray-400 text-sm">
          <a href="mailto:madhusaipitani95@gmail.com">madhusaipitani95@gmail.com</a></p>
      </div>
    </div>

    {/* Linkedin*/}
    <div className="flex items-center gap-4 mb-6">
      <span className="text-red-500 text-3xl"><BiLogoLinkedin/></span>
      <div>
        <p className="text-gray-200 font-semibold text-lg">Linkedin</p>
        <p className="text-gray-400 text-sm">
          <a href="https://www.linkedin.com/in/pitanimadhusayi">Linkedin/pitanimadhusayi</a></p>
      </div>
    </div>

    {/* Address */}
    <div className="flex items-start gap-4 mb-6">
      <span className="text-red-500 text-3xl"><BiMap/></span>
      <div>
        <p className="text-gray-200 font-semibold text-lg">Address</p>
        <p className="text-gray-400 text-sm">
          Allavaram <br /> Andhra Pradesh <br /> India
        </p>
      </div>
    </div>
    </div>
    {/* Form */}
    <div className='md:p-10 p-5 bg-black/40 border border-red-500/30 rounded-lg shadow-xl backdrop-blur-md'>
    <input type="text" placeholder='Name' className='px-4 py-3.5 bg-[#1A1A1C] border-red-500 text-white outline-none rounded-md w-full placeholder:text-white/60 focus:border-red-400 transition'/>

    <input type="email" placeholder='Email Address' className='px-4 py-3.5 mt-6 bg-[#1A1A1C] border-red-500 text-white outline-none rounded-md w-full placeholder:text-white/60 focus:border-red-400 transition'/>

    <textarea placeholder='Your Message' className='px-4 py-3.5 mt-6 bg-[#1A1A1C] border-red-500 text-white outline-none rounded-md w-full placeholder:text-white/60 focus:border-red-400 transition h-[15rem]'></textarea>

    <button className='mt-8 px-12 py-4 bg-red-600 hover:bg-red-700 transition-all duration-300 cursor-pointer text-black rounded-full '>Send Message</button>

    </div>
  </div>
</div>
  )
}

export default ContactPage