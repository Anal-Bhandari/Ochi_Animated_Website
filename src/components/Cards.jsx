import React from 'react'

function Cards() {
  return (
    <div  className='w-full h-screen bg-slate-200 flex items-center px-20 gap-5'>

        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center'>
                <img className='w-32'  src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2020</button>
            </div>
        </div>

        <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]'>
            <img className='w-32'  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card  relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]'>
            <img className='w-32'  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>

    </div>
  )
}

export default Cards