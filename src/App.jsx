import React, { useEffect } from 'react'
import Hero from './pages/Hero'
import Aboutpage from './pages/Aboutpage'
import gsap from 'gsap'
import Services from './pages/Services'
import LetsTalk from './pages/LetsTalk'
import Footer from './pages/Footer'
import { ScrollSmoother } from 'gsap/all'
import Parallex from './pages/Parallex'
import Projects from './pages/Projects'
import NewHero from './pages/NewHero'
import Navbar from './components/Navbar'


const App = () => {

  gsap.registerPlugin(ScrollSmoother)

  useEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      normalizeScroll: true
    });
  })
  return (
    <div id="smooth-wrapper" className='bg-[#1C1C1C] text-white overflow-x-hidden'>
      <div id="smooth-content">
        <Navbar />
        {/* <Hero /> */}
        <NewHero />
        <Aboutpage />
        <Projects />
        <Parallex />
        <Services />
        <LetsTalk />
        <Footer />
      </div>
    </div>
  )
}

export default App
