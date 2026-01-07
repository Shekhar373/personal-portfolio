import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollToPlugin, SplitText } from 'gsap/all'
import React from 'react'

const Aboutme = () => {

  gsap.registerPlugin(ScrollToPlugin, SplitText)

  useGSAP(() => {
    const split = SplitText.create(".about-text h1", {
      type: "chars",
      mask: "chars"
    })

    gsap.from(split.chars, {
      y: 150,
      rotateX: 100,
      stagger: {
        amount: 1,
        from: "end"
      },
      scrollTrigger: {
        trigger: ".about-text",
        // markers:true,
        start: "top 0%",
        // end:"top -20%",
        pin: true,
        scrub: 3
      }
    })
  })
  return (
    <div className='about-text h-screen w-full bg-[#101010] text-white max-sm:gap-20 flex flex-col items-end'>
      <div className='h-[50%] lg:w-[50%] max-sm:w-full md:px-20 xl:pt-50 md:pt-40 max-sm:p-5 text-3xl flex flex-col gap-5 lg:pt-15 lg:mr-10 text-center'>
        <h1>Hi! I’m a beginner frontend developer who loves creating visually engaging and interactive websites. I work with HTML, CSS, JavaScript, React, and Tailwind CSS, and I enjoy enhancing user experiences with GSAP and web animations.</h1>

        <h1>I’m constantly learning and practicing through real projects, and this portfolio reflects my journey and passion for frontend development.</h1>
      </div>
      <div className='h-[50%] w-full flex text-3xl gap-5 pt-15 md:pl-32 lg:pl-15 md:text-center max-sm:p-5 lg:text-center flex-col items-start '>

        <div>
          <h1 className='lg:pl-30 text-4xl xl:pl-0 md:pb-10 '>What I’m Learning Now</h1>
          <h1>Exploring 3D on the web with Three.js</h1>
          <h1>Combining animations and interactions using GSAP</h1>
          <h1>Building scalable React components</h1>
          <h1>Enhancing user experience with motion and visuals</h1>

        </div>
      </div>
    </div>
  )
}

export default Aboutme
