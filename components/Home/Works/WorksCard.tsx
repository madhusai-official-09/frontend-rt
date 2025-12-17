import React from 'react'
import Image from 'next/image'

type Props = {
    icon: string;
    name: string;
    description: string;
}

const WorksCard = ({ description, icon, name }: Props) => {
  return (
    <div
      className="
        border border-red-500/20
        rounded-xl
        p-6
        bg-white/0
        backdrop-blur-sm
        transition
        duration-300
        hover:border-red-500/40
        hover:bg-red-500/10
        
        /* ✨ Pop-Up effect */
        transform hover:scale-105

        /* ✨ Glow effect */
        hover:shadow-[0_0_30px_rgba(255,59,59,0.35)]
      "
    >
      <Image src={icon} alt="img" width={90} height={90} />
      
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">
        {name}
      </h1>

      <p className="mt-4 text-gray-400">
        {description}
      </p>
    </div>
  )
}

export default WorksCard
