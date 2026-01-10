import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const Aboutme = () => {

  gsap.registerPlugin(ScrollTrigger, SplitText)

  const abouttext = useRef(null)

  useGSAP(() => {
    const split = SplitText.create(".about-text h1", {
      type: 'words'
    })


    gsap.from(split.words, {
      opacity: 0.03,
      // rotate: 3,
      stagger: {
        amount: 1
      },
      scrollTrigger: {
        trigger: abouttext.current,
        // markers: true,
        start: "top 50%",
        end: 'top -50%',
        scrub: 3,

      }
    })
  })


  return (
    <div className=' about-text-parent h-screen w-full '>
      <div ref={abouttext} className=' about-text text-2xl  h-screen w-full flex flex-col sm:px-10 sm:text-3xl md:justify-center md:items-center md:px-40 md:text-3xl lg:px-70 lg:text-4xl px-10 text-center  '>
        <h1>Hi! I’m a beginner frontend developer who loves creating visually engaging and interactive websites. I work with HTML, CSS, JavaScript, React, and Tailwind CSS, and I enjoy enhancing user experiences with GSAP and web animations.
        </h1>
        <h1>I’m constantly learning and practicing through real projects, and this portfolio reflects my journey and passion for frontend development.</h1>
      </div>
    </div>
  )
}

export default Aboutme
