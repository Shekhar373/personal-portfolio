import React from 'react'

const FootComp = () => {
  return (
    <div className=' h-[80vh] bg-[#D83D3D] text-[#1C1C1C]   relative w-full overflow-hidden'>
      <div className='h-[50%] w-full flex flex-col gap-10 lg:relative '>
        <div className=' sm:flex sm:justify-center sm:items-center sm:flex-col lg:absolute lg:bottom-0 lg:right-10'>
          <div className='lg:text-[3.5vw] pt-10 text-center sm:text-3xl md:text-center md:text-5xl md:pt-10 lg:text-right sm:text-center leading-tight'>
            <h1 className='border-animate-black inline-block'>+91 7289892887</h1>
            <h1 className='border-animate-black'>shekhar24102004@gmail.com</h1>
          </div>
          <div className='lg:flex gap-10 pt-5 text-center sm:text-center md:text-2xl md:text-center max-sm:mt-5 sm:text-3xl  text-2xl font-light'>
            <a className='border-animate-black' href="#">INSTAGRAM</a>
            <a className='border-animate-black' href="#">TELEGRAM</a>
            <a className='border-animate-black' href="#">LINKDIN</a>
          </div>
        </div>
        <div className=' flex sm:gap-10 mb-5 justify-center gap-10 md:text-3xl lg:flex-col lg:gap-5 lg:absolute lg:bottom-0 lg:left-10 text-2xl tracking-wider'>
          <h1 className='border-animate-black'>ABOUT ME</h1>
          <h1 className='border-animate-black '>SERVICES</h1>
          <h1 className='border-animate-black'>WORKS</h1>
        </div>
      </div>
      <div className='foot-text sm:leading-35 md:leading-30 lg:leading-50  text-[17vw] text-center mt-30 sm:mt-20 md:mt-30 xl:mt-10'>
        <h1>SHEKHAR SHARMA</h1>
      </div>
    </div>
  )
}

export default FootComp