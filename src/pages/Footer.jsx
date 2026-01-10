import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const Footer = () => {

  gsap.registerPlugin(ScrollTrigger,SplitText)
  useGSAP(()=>{
     const split = SplitText.create(".foot-text h1",{
      type:"chars",
      mask:"chars"
     })

     gsap.from(split.chars,{
      y:250,
      stagger:{
        amount:0.3,
        from:"center"
      },
      scrollTrigger:{
        trigger:".foot-text",
        // markers:true,
        start:"top 90%",
        end:"top 55%",
        scrub:2
      }
     })
  })
  return (
    <div className='lg:h-screen max-sm:h-[70vh] md:h-[70vh]  relative w-full overflow-hidden '>
      <div className='h-[50%] w-full relative '>
        <div className=' max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col lg:absolute lg:bottom-0 lg:right-10'>
          <div className='lg:text-[3.5vw] max-sm:text-3xl md:text-center md:text-5xl lg:text-right max-sm:text-center leading-tight'>
            <h1 className='border-animate inline-block'>+91 7289892887</h1>
            <h1 className='border-animate'>shekhar24102004@gmail.com</h1>
          </div>
          <div className='lg:flex gap-10 pt-10 max-sm:text-center max-md:text-2xl md:text-center md:mt-10 max-sm:mt-5 sm:text-3xl  text-2xl font-light'>
            <a className='border-animate' href="#">INSTAGRAM</a>
            <a className='border-animate' href="#">TELEGRAM</a>
            <a className='border-animate' href="#">LINKDIN</a>
          </div>
        </div>
        <div className=' max-sm:flex max-sm:gap-10 max-sm:justify-center md:flex md:gap-20 md:justify-center md:mt-30 md:text-3xl max-sm:mt-25 lg:flex-col lg:gap-5 lg:absolute lg:bottom-0 lg:left-10 text-2xl tracking-wider'>
          <h1 className='border-animate'>ABOUT ME</h1>
          <h1 className='border-animate '>SERVICES</h1>
          <h1 className='border-animate'>WORKS</h1>
        </div>
      </div>
      <div className='foot-text text-[17vw] text-[#D83D3D] max-sm:absolute max-sm:bottom-5 max-sm:pl-3 text-center mt-10'>
        <h1>SHEKHAR SHARMA</h1>
      </div>
    </div>
  )
}

export default Footer
