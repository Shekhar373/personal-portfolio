import React from 'react'
import Navbar from '../components/Navbar'
import HeroText from '../components/HeroText'
import HeroFooter from '../components/HeroFooter'
import About from '../components/aboutcomponent/About'

const Hero = () => {
  return (
    <div className='h-[180vh] overflow-x-clip w-full '>
      <Navbar />
      <HeroText />
      <HeroFooter />
     

    </div>
  )
}

export default Hero
