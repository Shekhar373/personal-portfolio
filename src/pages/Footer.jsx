import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import FootComp from '../components/FootComponent/FootComp'

const Footer = () => {

  // gsap.registerPlugin(ScrollTrigger,SplitText)
  // useGSAP(()=>{
  //    const split = SplitText.create(".foot-text h1",{
  //     type:"chars",
  //     mask:"chars"
  //    })

  //    gsap.from(split.chars,{
  //     y:250,
  //     stagger:{
  //       amount:0.3,
  //       from:"center"
  //     },
  //     scrollTrigger:{
  //       trigger:".foot-text",
  //       // markers:true,
  //       start:"top 90%",
  //       end:"top 55%",
  //       scrub:2
  //     }
  //    })
  // })
  return (
    <div>
      <FootComp />
    </div>
  )
}

export default Footer
