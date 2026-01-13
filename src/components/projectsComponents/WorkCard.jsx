import React from 'react'

const WorkCard = () => {
  return (
    <div className='h-screen w-full bg-[#1C1C1C] text-white relative'>
      <div className=' flex justify-center items-center'>
         <div className='leading-[10vw]'>
            <h1 className='text-2xl pb-5 pl-2'>project 01</h1>
            <h1 className='text-[12vw]'>newhue <br /> studio</h1>
         </div>
         <div>
            <img className='h-[50vh] w-[35vw] object-cover'
             src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/6852b1f05b45794fec384c15_Halo-thumb.webp" alt="" />
         </div>
         
      </div>
    </div>
  )
}

export default WorkCard
