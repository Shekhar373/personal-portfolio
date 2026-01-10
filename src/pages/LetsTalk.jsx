import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const LetsTalk = () => {

  gsap.registerPlugin(ScrollTrigger,SplitText)

  useGSAP(()=>{
    const split = SplitText.create(".talk-heading-1",{
      type:"chars",
      mask:"chars"
    })
    const splitt = SplitText.create(".talk-heading-2",{
      type:"chars",
      mask:"chars"
    })

    gsap.from(split.chars,{
      y:-170,
      stagger:{
        amount:0.5,
        from:"center"
      },
      scrollTrigger:{
        trigger:".talk-heading-1",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:1

      }
})
    gsap.from(splitt.chars,{
      y:-170,
      stagger:{
        amount:0.5,
        from:"center"
      },
      scrollTrigger:{
        trigger:".talk-heading-2",
        // markers:true,
        start:"top 90%",
        end:"top 40%",
        scrub:3

      }
})


  })
  return (
    <div className='  h-[60vh] md:h-screen w-full flex flex-col justify-center items-center md:leading-20 lg:leading-28'>
        <div className=' text-xl'>
          <h1 >LET'S START THE COVERSATION</h1>
        </div>
        <div className='talk-heading-1 text-[13vw] md:text-[10vw] text-[#D83D3D]'>
          <h1 >GREAT DESIGN</h1>
        </div>
        <div className=' tracking-[1.5vw] text-xl'>
          <h1 >STARTS WITH</h1>
        </div>
        <div className='talk-heading-2 text-[13vw] md:text-[10vw] whitespace-nowrap text-[#D83D3D]'>
          <h1 >GREATE COLLABERATION</h1>
        </div>
    </div>
  )
}

export default LetsTalk

