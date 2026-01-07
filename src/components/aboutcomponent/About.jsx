import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const About = () => {

  gsap.registerPlugin(ScrollTrigger,SplitText)

  useGSAP(()=>{
    const split = SplitText.create(".about-pin h1",{
      type:"chars",
      mask:"chars"
    })

    gsap.from(split.chars,{
      y:-250,
      stagger:{
        amount:1,
        from:"random"

      },

      scrollTrigger:{
        trigger:".about-pin",
        // markers:true,
        start:"top 0",
        pin:true,
        scrub:2
      }
    })
  })
  return (
    <div className='about-pin h-screen w-screen bg-[#101010] text-white text-[10vw] md:leading-28 md:pt-20 lg:pt-0 md:pl-20 max-lg:leading-28 sm:leading-14 xl:leading-44  flex flex-col lg:pl-85 max-sm:pl-10 max-sm:pt-30 lg:justify-center'>
      <h1>DESIGN</h1>
      <h1 className='text-[#A9A9A9]'>IS NOT JUST</h1>
      <h1 className='text-[#A9A9A9]'>DECORATION ,BUT</h1>
      <h1>A TOOL FOR INFLUENCE</h1>
      <h1>AND GROWTH.</h1>
    </div>
  )
}

export default About
