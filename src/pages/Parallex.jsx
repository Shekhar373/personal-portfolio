import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const Parallex = () => {

    gsap.registerPlugin(ScrollTrigger,SplitText)

    useGSAP(()=>{
        const split = SplitText.create(".parallex-text",{
            type:"chars",
            mask:"chars"
        })

        gsap.from(split.chars,{
            y:-250,
            stagger:{
                amount:0.5,
                from:"center",
                ease: "power2.Out",
            },
            scrollTrigger:{
                trigger:".parallex-text",
                // markers:true,
                start:"top 30%",
                end:"top 0%",
                scrub:3
            }
        })
    })
    return (
        <>

            <div className='lg:h-[300vh] sm:h-[200vh] md:h[200vh] relative w-full bg-linear-to-b from-[#101010] to-amber-50"'>

                <div className='parallex-text lg:h-screen max-sm:h-[30vh] md:h-[50vh] w-full sticky lg:top-0 max-sm:top-80 bg-transparent pt-[17%]  mix-blend-difference z-40 text-white lg:text-[8vw] max-sm:text-[10vw] md:text-[10vw] md:leading-23 text-center lg:leading-28 max-sm:leading-14 '>
                    <h1 className=''>Let's Make </h1>
                    <h1>Things Happen.</h1>
                </div>

                <div className='lg:h-[200vh] max-sm:h-[170vh] md:h-[150vh] w-full flex'>
                    <div className='h-full w-1/6 flex flex-col border-amber-50 items-center'>
                        <img data-speed='1.4' className='relative top-[25%] w-[95%]'
                            src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/6882cc2aa788ed759d4e2c18_68502c02bf65bde2e99084bd_fosx9tr0ktkkftzrzl0hd45zh4h2.webp" alt="" />
                    </div>
                    <div className='h-full w-1/6  flex flex-col  border-amber-50 items-center'>
                        <img data-speed='0.9' className='object-cover relative top-[30%] w-[95%] '
                            src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/687a407bf6500870415015e9_Container.webp" alt="" />
                    </div>
                    <div className='h-full w-1/6 flex flex-col border-amber-50 items-center'>
                        <video data-speed='2' className='relative top-[30%] w-[95%]'
                            autoPlay loop muted src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34%2F684fe7c46bfd598b9144591f_COV%20-%20Tourism--mp4%20Comp%201_1-transcode.mp4"></video>
                    </div>

                    <div className='h-full w-1/6 flex flex-col border-amber-50 items-center'>
                        <video data-speed='1' className='relative top-[15%] w-[95%]'
                            autoPlay loop muted src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34%2F684fe7a7e0b906dca269a766_CRISIS%20PRT1-mp4%20Comp%201_1-transcode.mp4"></video>
                    </div>
                    <div className='h-full w-1/6 flex flex-col border-amber-50 items-center'>
                        <img data-speed='0.8' className='relative top-[20%] w-[95%]'
                            src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/6852dac5ffc41d70c5599402_balloon-Image.webp" alt="" />
                    </div>
                    <div className='h-full w-1/6 flex flex-col items-center'>
                        <video data-speed='1.2' className='relative top-[35%] w-[95%]'
                            autoPlay loop muted src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34%2F684fe7c46bfd598b9144591f_COV%20-%20Tourism--mp4%20Comp%201_1-transcode.mp4"></video>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Parallex
