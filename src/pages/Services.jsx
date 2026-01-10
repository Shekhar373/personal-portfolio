import React from 'react'
import ServiceCard from '../components/ServiceComp/ServiceCard'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const Services = () => {

   gsap.registerPlugin(ScrollTrigger,SplitText)

   useGSAP(()=>{
    const split = SplitText.create(".service-head",{
      type:"chars",
      mask:"chars"
    })

    gsap.from(split.chars,{
            y:-250,
            stagger:{
                amount:0.4,
                
                from:"center"
            },
            scrollTrigger:{
                trigger:".service-head",
                // markers:true,
                start:"top 60%",
                end:"top 10%",
                scrub:3
            }
        })

        
  })
  return (
    <div className=''>
      
        <div className='service-head  text-[#D83D3D] text-[10vw] p-10 '>
        <h1>SERVICES</h1>
      
      </div>
      <ServiceCard />
    </div>
  )
}

export default Services
