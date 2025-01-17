import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full pt-[8.5rem] pb-[3.5rem] rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'> 
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}}  className='text-[17vw] leading-none font-bold uppercase pr-10 mb-1 -mt-6 pt-[-0.5rem] tracking-tighter'>we are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[17vw] leading-none font-bold pr-10 uppercase mb-1 -mt-6 pt-[-0.5rem] tracking-tighter'>we are ochi</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee