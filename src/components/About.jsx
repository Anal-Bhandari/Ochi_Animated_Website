import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[3.5vw] tracking-tight leading-[3.5vw]'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562]">
            <div className='w-1/2'>
            <h1 className='text-6xl'>Our approach:</h1>
            <button className="px-9 py-4 flex gap-8 items-center bg-zinc-900 text-white mt-8 rounded-full">Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-2xl '>
            <img className='w-fit rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default About