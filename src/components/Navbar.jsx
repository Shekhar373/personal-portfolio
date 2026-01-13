import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import React, { useRef } from 'react'

const Navbar = () => {

  gsap.registerPlugin(ScrollToPlugin)

  const navaniRef = useRef(null)
  useGSAP(() => {
    gsap.from(navaniRef.current, {

      opacity: 0,

      delay: 1,
      duration: 1,

    })


  })

  const contact = () => {
    gsap.to(window, { duration: 2, scrollTo: "#contact" })
  }
  const home = () => {
    gsap.to(window, { duration: 2, scrollTo: "#home" })
  }
  const about = () => {
    gsap.to(window, { duration: 1, scrollTo: "#about" })
  }
  const work = () => {
    gsap.to(window, { duration: 2, scrollTo: "#project" })
  }
  const service = () => {
    gsap.to(window, { duration: 2, scrollTo: "#service" })
  }

  return (
    <div ref={navaniRef} className='h-[15vh] flex p-5 font-medium fixed z-50 w-full justify-between text-white items-center md:p-10'>
      <div className='text-[2vw] max-sm:text-xl tracking-widest  '>
        <h1 onClick={home} className='cursor-pointer'>Shekhar</h1>
      </div>
      <div className='flex gap-16 max-md:hidden tracking-widest '>
        <h2 onClick={about} className='border-animate'> ABOUT ME</h2>
        <h2 onClick={work} className='border-animate'>WORKS</h2>
        <h2 onClick={service} className='border-animate'>SERVICES</h2>
        {/* <h2 onClick={contact} className='border-animate'>CONNECT</h2> */}
      </div>
      <div className=' cursor-pointer tracking-widest '>
        <h2 onClick={contact} className='cursor-pointer border-animate' >CONTECT ME</h2>
      </div>
    </div>
  )
}

export default Navbar
