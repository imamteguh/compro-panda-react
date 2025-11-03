import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './components/About'
import OurCompany from './components/OurCompany'

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <OurCompany />
    </div>
  )
}

export default App