import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { use } from 'react'

const NewHero = () => {

  gsap.registerPlugin(SplitText)

  useGSAP(() => {

    const split = SplitText.create(".heading h1", {
      type: "chars"
      
    })



    gsap.fromTo(split.chars, {

      'will-change': 'opacity, transform',
      transformOrigin: '-50% 0%',
      opacity: 0,
      rotationX: -90,
      z: -200
    },
      {
        ease: 'power1',
        opacity: 1,
        delay: 1,
        duration: 0.7,
        stagger: 0.01,
        rotationX: 0,
        z: 0,

      });
  })
  return (

    <div className=' relative h-screen w-screen bg-[#1C1C1C] text-white overflow-hidden'>
      <div className=''>
        <div className=' w-full  flex justify-center gap-10 px-10 pt-10 md:pt-50 md:flex  md:justify-center md:gap-10 md:text-2xl lg:pt-60 lg:text-4xl max-xl:pt-30'>
          <h1>THE DESIGNER AND DEVELOPER</h1>
          
        </div>
      </div>

      <div className='heading text-center text-[32vw] text-[#D83D3D] md:absolute md:-bottom-10 right-10 lg:absolute lg:-bottom-30 lg:right-20'>
        <h1>SHEKHAR</h1>
      </div>


    </div>
  )
}

export default NewHero
