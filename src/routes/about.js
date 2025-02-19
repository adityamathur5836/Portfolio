import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'

function about() {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = 'About' text = "I'm a First year Undergrad at Newton School of Technology, Rishihood University."/>
      <AboutContent />
    </div>
  )
}

export default about