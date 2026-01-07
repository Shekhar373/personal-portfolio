import React from 'react'

const WorkCard = () => {
  return (
    <div className='h-screen w-full bg-[#101010] text-white relative'>
      <div className='h-[70%] w-full relative'>
         <div className=' gap-5 absolute top-45 left-50 mix-blend-difference z-20'>
            <h1 className='text-2xl pb-5 pl-2'>project 01</h1>
            <h1 className='text-[12vw] leading-28'>newhue <br /> studio</h1>
         </div>
         <div>
            <img className='h-[50vh] w-[35vw] absolute top-45 right-90 object-cover'
             src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/6852b1f05b45794fec384c15_Halo-thumb.webp" alt="" />
         </div>
         <div className=' w-[15%] text-xl pl-5 absolute -bottom-10 right-45'>
            <h1>A 6X3 metre renaissance-style oil painting to support the launch of Xbox’s flagship video game, Halo Infinite.</h1>
         </div>
      </div>
    </div>
  )
}

export default WorkCard
