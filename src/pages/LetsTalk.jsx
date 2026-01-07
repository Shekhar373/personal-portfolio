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
    <div className='lg:h-screen max-sm:h-[60vh] md:h-[80vh] w-full flex flex-col justify-center lg:leading-36 max-sm:leading-12 md:leading-20 xl:leading-48 items-center'>
        <div className=' text-xl'>
          <h1 >LET'S START THE COVERSATION</h1>
        </div>
        <div className='talk-heading-1 text-[10vw]'>
          <h1 >GREAT DESIGN</h1>
        </div>
        <div className=' tracking-[1.5vw] text-xl'>
          <h1 >STARTS WITH</h1>
        </div>
        <div className='talk-heading-2 text-[10vw]'>
          <h1 >GREATE COLLABERATION</h1>
        </div>
    </div>
  )
}

export default LetsTalk

