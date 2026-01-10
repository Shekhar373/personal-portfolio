import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const About = () => {

  gsap.registerPlugin(ScrollTrigger,SplitText)

  useGSAP(()=>{
    const split = SplitText.create(".about-pin h1",{
      type:"chars",
      
    })

    gsap.fromTo(split.chars, {
      'will-change': 'opacity, transform', 
      z: () => gsap.utils.random(500,950),
      opacity: 0,
      xPercent: () => gsap.utils.random(-100,100),
      yPercent: () => gsap.utils.random(-10,10),
      rotationX: () => gsap.utils.random(-90,90)
  }, 
  {
      ease: 'expo',
      opacity: 1,
      rotationX: 0,
      rotationY: 0,
      xPercent: 0,
      yPercent: 0,
      z: 0,
      scrollTrigger: {
          trigger: ".about-pin",
          start: 'top 0',
          end: 'top -150%',
          // markers:true,
          scrub: 3,
          pin: true,
      },
      stagger: {
          each: 0.006,
          from: 'random'
      }
  });

    // gsap.from(split.chars,{
    //   y:-250,
    //   stagger:{
    //     amount:1,
    //     from:"random"

    //   },

    //   scrollTrigger:{
    //     trigger:".about-pin",
    //     // markers:true,
    //     start:"top 0",
    //     pin:true,
    //     scrub:2
    //   }
    // })
  })
  return (
    <div className='about-pin h-screen w-screen bg-[#1C1C1C] text-white text-6xl py-20 pl-15 md:text-[10vw] md:pl-40 md:pt-20 md:leading-20 lg:text-[10vw] lg:leading-28 lg:pt-15  '>
      <h1>DESIGN</h1>
      <h1 className='text-[#A9A9A9]'>IS NOT JUST</h1>
      <h1 className='text-[#A9A9A9]'>DECORATION ,BUT</h1>
      <h1>A TOOL FOR INFLUENCE</h1>
      <h1>AND GROWTH.</h1>
    </div>
  )
}

export default About
