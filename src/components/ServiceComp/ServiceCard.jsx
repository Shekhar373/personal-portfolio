import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React, { useEffect } from 'react'


const ServiceCard = () => {

  gsap.registerPlugin(ScrollTrigger)

  const servicearr = [
    {
      number: "01",
      name: "WEB DESIGN"
    },
    {
      number: "02",
      name: "FRONTEND DEVELOPMENT"
    },
    {
      number: "03",
      name: "ANIMATED PORTFOLIO"
    },
    {
      number: "04",
      name: "LANDING PAGE"
    },
    

  ]

  useEffect(() => {

    
    gsap.utils.toArray(".service-line").forEach(serviceline => {
      gsap.from(serviceline, {
        rotateX: 90,
        scrollTrigger: {
          trigger: serviceline,
          // markers: true,
          start: "top 70%",
          end: "top 50%",
          scrub: 1

        }
      })
    })
  })
  

  return (
    <div>
     <div className=' lg:min-h-[150vh] max-sm:h-auto w-full '>
      {servicearr.map((servicearr, index) => {
        return <div key={index} className=' service-line lg:h-[30vh] md:pl-10 sm:h-[10vh] lg:p-10 max-sm:pl-10 w-screen   flex gap-5'>
          <h1 className=' lg:text-2xl md:text-2xl max-sm:text-lg pb-10 '>{servicearr.number}</h1>
          <h1 className='lg:text-7xl max-sm:text-3xl md:text-4xl  lg:font-extrabold'>{servicearr.name}</h1>
        </div>
      })}
      
    </div>
    </div>
  )
}

export default ServiceCard
