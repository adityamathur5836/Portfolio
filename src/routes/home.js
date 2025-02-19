import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import About from './about'
import Contact from './contact'

function home() {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default home