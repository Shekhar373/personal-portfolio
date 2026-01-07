import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const HeroText = () => {

    gsap.registerPlugin(SplitText)
    const proimg = useRef()
    const tl = gsap.timeline()

    useGSAP(() => {
       
        const split = SplitText.create(".heading h1",{
            type:"chars",
            mask:"chars"
        })

        tl.from(split.chars,{
            y:-250,
            stagger:{
                amount:0.4,
                from:"center",
                ease: "power2.Out",
            }
        })

        tl.from(proimg.current, {
            y: -150,
            opacity: 0,

            // scale: 0,
            ease: "power3.out",
            duration: 0.5,
        }, "same")

        tl.from(".india h1", {
            opacity: 0,
            x: 50
        }, "same")

        tl.from(".skill h1", {
            x: 50,
            duration: 0.7,
            opacity: 0,
            stagger: 0.2
        }, "same")


    })


    return (
        <div className='lg:h-[90vh] sm:h-[60vh] md:h-[70vh] w-full'>
            <div className='h-[15vh] '></div>
            <div className='relative'>
                <div className='lg:text-[15vw] max-sm:text-[28vw] max-sm:leading-24  md:text-[25vw] md:items-center md:leading-[15vh] md:flex  lg:pt-20 font-bold lg:flex gap-1.5 justify-center relative z-20'>
                    <div className='heading lg:flex max-sm:text-center tracking-wide'>
                        <h1>CREATIVE</h1>
                        <h1>DESIGNER</h1>
                    </div>
                </div>
                <div className=' max-md:flex max-sm:pl-8 max-md:flex-col'>
                    <img ref={proimg} className=' lg:h-[60vh] lg:w-[25vw] md:w-[50vw] max-sm:h-[25vh] md:h-[40vh] object-cover md:pt-15 md:pl-10 md:right-57 absolute lg:right-[37%] lg:top-25 max-sm:mt-15 z-10'
                     src="https://www.olhalazarieva.com/img/olha3.jpg" alt="" />
                    <div className=' india   md:gap-15 max-sm:gap-15  max-sm:flex md:flex lg:text-xl lg:absolute md:text-3xl  lg:right-9 lg:top-52 lg:tracking-[1.3vw] md:tracking-[3.7vw] md:justify-center sm:justify-center  max-sm:tracking-[3.3vw]'>
                        <h1>BASED</h1>
                        <h1>IN</h1>
                        <h1>INDIA</h1>
                    </div>
                    <div className='h-[32vh]  w-full flex lg:justify-center relative  '>
                        <div className=' skill h-full  lg:w-[40%]  flex flex-col lg:justify-end text-2xl max-sm:pl-30 max-sm:pt-35  font-medium max-sm:leading-6
                         '>
                            <h1>/WEB DESIGNER</h1>
                            <h1>/UI UX DESIGNER</h1>
                            <h1>/WEB DEVELOPER</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroText
