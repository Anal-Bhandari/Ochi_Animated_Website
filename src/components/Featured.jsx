
import { motion, useAnimation } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { useState } from 'react'

function Featured() {
  var cards = [useAnimation(), useAnimation()];
  var cards2 = [useAnimation(), useAnimation()];
  var cards3 = [useAnimation(), useAnimation()];

  var handleHover = (index)=>{
    cards[index].start({y : "0"})
  }

  var handleHoverEnd = (index)=>{
    cards[index].start({y : "100%"})
  }
  var handleHover2 = (index)=>{
    cards2[index].start({y : "0"})
  }

  var handleHoverEnd2 = (index)=>{
    cards2[index].start({y : "100%"})
  }
  var handleHover3 = (index)=>{
    cards3[index].start({y : "0"})
  }

  var handleHoverEnd3 = (index)=>{
    cards3[index].start({y : "100%"})
  }

  return (

    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-12'>
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
        </div>

        <div className="px-20 ">
        <div className='cards w-full flex gap-10 mt-10'>

        <div className='w-1/2 h-[75vh] '>

        <div className="text-left gap-3 flex items-center  py-4">
          <div className='h-3 w-3 rounded-full bg-white'></div>
            <h1 className="text-lg font-semibold text-white">FYDE</h1>
          </div>

        <motion.div
             onHoverStart={()=>handleHover(0)} 
             onHoverEnd={()=> handleHoverEnd(0)}
             className='cardcontainer relative h-[75vh]'>
            <h1 className='absolute flex right-0 overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]' >
            {"FYDE".split("").map((item, index) => (
              <motion.span 
              initial={{y: "100%"}} animate={cards[0]} 
              transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
              className='inline-block'>{item}</motion.span>
            ))}
            </h1>
      
            <div className="card w-full h-full overflow-hidden rounded-xl">
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" className="w-full h-full bg-cover" />
            </div>
            </motion.div>

            <div className="flex gap-4 py-4">
            {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
              (button, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border text-sm font-medium text-white rounded-full "
                >
                  {button}
                </button>
              )
            )}
          </div>
        </div>

           <div className='w-1/2 h-[75vh] '>

           <div className="text-left gap-3 flex items-center py-4">
          <div className='h-3 w-3 rounded-full bg-white'></div>
            <h1 className="text-lg font-semibold text-white">PLANETLY</h1>
          </div>

           <motion.div 
            onHoverStart={()=>handleHover(1)} 
            onHoverEnd={()=> handleHoverEnd(1)}
            className='cardcontainer relative h-[75vh]'>
            <div className="card w-full h-full overflow-hidden rounded-xl">
            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]'>
            {"PLANETLY".split("").map((item, index) => (
                <motion.span 
                initial={{y: "100%"}} animate={cards[1]} 
                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                className='inline-block'>{item}
                </motion.span>
            ))}
            </h1>
                <img src="https://ochi.design/wp-content/uploads/2022/05/10-663x550.png" alt="" className="w-full h-full bg-cover" />
            </div>
            </motion.div>

            <div className="flex gap-4 py-4">
            {["AGENCY", "BIG NEWS DECK", "BRANDED TEMPLATE", "INVESTOR DECK"].map(
              (button, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border text-sm font-medium text-white rounded-full "
                >
                  {button}
                </button>
              )
            )}
          </div>

          </div>
           
        </div>
        </div>

        <div className="px-20 ">
        <div className='cards2 w-full flex gap-10 mt-10'>

            <div className="w-1/2 h-[75vh] mt-24">

            <div className="text-left gap-3 flex items-center py-4">
          <div className='h-3 w-3 rounded-full bg-white'></div>
            <h1 className="text-lg font-semibold text-white">SOFTSTART</h1>
          </div>

            <motion.div
             onHoverStart={()=>handleHover2(0)} 
             onHoverEnd={()=> handleHoverEnd2(0)}
             className='cardcontainer relative h-[75vh]'>
            <h1 className='absolute flex right-0 overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]' >
            {"SOFTSTART".split("").map((item, index) => (
              <motion.span 
              initial={{y: "100%"}} animate={cards2[0]} 
              transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
              className='inline-block'>{item}</motion.span>
            ))}
            </h1>
      
            <div className="card2 w-full h-full overflow-hidden rounded-xl">
                <img src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x550.jpg" alt="" className="w-full h-full bg-cover" />
            </div>
            </motion.div>

            <div className="flex gap-4 py-4">
            {["BRANDED TEMPLATE", "SALES DECK"].map(
              (button, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border text-sm font-medium text-white rounded-full "
                >
                  {button}
                </button>
              )
            )}
          </div>

            </div>

            <div className="w-1/2 h-[75vh] mt-24">

            <div className="text-left gap-3 flex items-center py-4">
          <div className='h-3 w-3 rounded-full bg-white'></div>
            <h1 className="text-lg font-semibold text-white">OFFICEVIBE</h1>
          </div>

            <motion.div 
            onHoverStart={()=>handleHover2(1)} 
            onHoverEnd={()=> handleHoverEnd2(1)}
            className='cardcontainer relative h-[75vh]'>
            <div className="card2 w-full h-full overflow-hidden rounded-xl">
            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]'>
            {"OFFICEVIBE".split("").map((item, index) => (
                <motion.span 
                initial={{y: "100%"}} animate={cards2[1]} 
                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                className='inline-block'>{item}
                </motion.span>
            ))}
            </h1>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x550.jpg" alt="" className="card2 w-full h-full bg-cover" />
            </div>
            </motion.div>

            <div className="flex gap-4 py-4">
            {["BRANDED TEMPLATE", "SLIDES DESIGN"].map(
              (button, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border text-sm font-medium text-white rounded-full "
                >
                  {button}
                </button>
              )
            )}
          </div>
            </div>
           
        </div>
        </div>

        <div className="px-20 pb-28">
        <div className='cards3 w-full flex gap-10 mt-10'>

            <div className="w-1/2 h-[75vh] mt-24">

            <div className="text-left gap-3 flex items-center py-4">
          <div className='h-3 w-3 rounded-full bg-white'></div>
            <h1 className="text-lg font-semibold text-white">BLACK BOOK</h1>
          </div>

            <motion.div
             onHoverStart={()=>handleHover3(0)} 
             onHoverEnd={()=> handleHoverEnd3(0)}
             className='cardcontainer relative  h-[75vh]'>
            <h1 className='absolute flex right-0 overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]' >
            {"BLACKBOOK".split("").map((item, index) => (
              <motion.span 
              initial={{y: "100%"}} animate={cards3[0]} 
              transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
              className='inline-block'>{item}</motion.span>
            ))}
            </h1>
      
            <div className="card3 w-full h-full overflow-hidden rounded-xl">
                <img src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x550.jpg" alt="" className="w-full h-full bg-cover" />
            </div>
            </motion.div>

            <div className="flex gap-4 py-4">
            {["INVESTOR DECK", "REDESIGN", "REVIEW"].map(
              (button, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border text-sm font-medium text-white rounded-full "
                >
                  {button}
                </button>
              )
            )}
          </div>

            </div>

            <div className="w-1/2 h-[75vh] mt-24">

            <div className="text-left gap-3 flex items-center py-4">
          <div className='h-3 w-3 rounded-full bg-white'></div>
            <h1 className="text-lg font-semibold text-white">TRAWA</h1>
          </div>

            <motion.div 
            onHoverStart={()=>handleHover3(1)} 
            onHoverEnd={()=> handleHoverEnd3(1)}
            className='cardcontainer relative h-[75vh]'>
            <div className="card3 w-full h-full overflow-hidden rounded-xl">
            <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]'>
            {"TRAWA".split("").map((item, index) => (
                <motion.span 
                initial={{y: "100%"}} animate={cards3[1]} 
                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                className='inline-block'>{item}
                </motion.span>
            ))}
            </h1>
                <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x550.jpg" alt="" className="card3 w-full h-full bg-cover" />
            </div>
            </motion.div>

            <div className="flex gap-4 py-4">
            {["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"].map(
              (button, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border text-sm font-medium text-white rounded-full "
                >
                  {button}
                </button>
              )
            )}
          </div>

            </div>
           
        </div>
        </div>
    </div>
  )
}

export default Featured