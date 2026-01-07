import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const HeroFooter = () => {

    gsap.registerPlugin(ScrollTrigger,SplitText)

    useGSAP(()=>{
        const split = SplitText.create(".about h1",{
            type:"chars",
            mask:"chars"
        })

        gsap.from(split.chars,{
            y:-310,
            stagger:{
                amount:0.4,
                
                from:"center"
            },
            scrollTrigger:{
                trigger:".about",
                // markers:true,
                start:"top 60%",
                end:"top 10%",
                scrub:3
            }
        })


    })
    return (
        <div className=' lg:h-[90vh] sm:h-[20vh] max-md:h-[40vh] flex flex-col '>
            <div className='w-full flex justify-center items-center max-sm:hidden'>
                <div className='h-[10vh] w-[35vw] tracking-widest md:pt-20 lg:pt-0 text-[18px] font-extralight uppercase flex justify-center mt-14 text-center'>
                    <h3>Frontend Developer crafting animated and interactive web experiences</h3>
                </div>
            </div>
            <div className='p-10 mt-28 w-fit'>
                <h1 className='text-xl'>AVAILABLE TO COLLABORATION</h1>
                <h1 className='border-animate text-2xl  font-medium lg:ml-20 max-sm:ml-10 cursor-pointer'>shekhar24102004@gmail.com</h1>
            </div>
            
            

            <div className='about lg:text-[15vw] md:text-[25vw] max-sm:text-[27vw] flex justify-center ] '>
                <h1>ABOUT ME</h1>
            </div>
        </div>
    )
}

export default HeroFooter
