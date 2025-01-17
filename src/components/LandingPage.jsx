import { easeInOut, motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function LandingPage() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
            {/* <div className="masker">
                <h1 className='uppercase text-7xl leading-none tracking-tighter font-[Founders_Grotesk font-semibold'>We Create</h1>
            </div>
            <div className="masker">
                <h1 className='uppercase text-7xl leading-none tracking-tighter font-[Founders_Grotesk font-semibold'>Eye Opening</h1>
            </div>
            <div className="masker">
                <h1 className='uppercase text-7xl leading-none tracking-tighter font-[Founders_Grotesk font-semibold'>Presentations</h1>
            </div> */}
            {/* We will be writing masker using map method */}

            {["We Create", "Eye-Opening", "Presentations"].map((items,idx) =>{
                return( <div className="masker">
                    <div className='w-fit flex items-center justify-center'>
                        {idx===1 && (
                            <motion.div>
                                <motion.img initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='bg-cover mt-[9px] mr-5 w-[8vw] rounded-md h-[4.9vw] relative' src="./images/ochi_logo.png" alt="" />
                            </motion.div >
                        )}
                    <h1 className='uppercase text-8xl leading-none tracking-tighter font-bold'>{items}</h1>
                    </div>
                </div>
                );
            })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item,idx)=>
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            )}
            <div className="start flex items-center gap-5">
                <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm uppercase '>start the project</div>
            <div className='w-10 h-10 items-center justify-center flex border-[1px] border-zinc-400 rounded-full '>
            <GoArrowUpRight />
            </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage