import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Navbar = () => {
  
  const navaniRef = useRef(null)
  useGSAP(()=> {
    gsap.from(navaniRef.current,{
    
    opacity: 0,
    
    delay:1,
    duration:1,
    
    })
  })

  return (
    <div ref={navaniRef} className='h-[15vh] font-medium fixed z-50 w-full flex justify-between items-center p-10'>
      <div className='text-[2vw] tracking-widest '>
        <h1 className=''>Shekhar</h1>
      </div>
      <div className='flex gap-16 max-md:hidden tracking-widest '>
        <h2 className='border-animate'> ABOUT ME</h2>
        <h2 className='border-animate'>WORKS</h2>
        <h2 className='border-animate'>SERVICES</h2>
        <h2 className='border-animate'>CONNECT</h2>
      </div>
      <div className=' tracking-widest'>
        <h2>CONTECT ME</h2>
      </div>
    </div>
  )
}

export default Navbar
