import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Work from '../components/Work'

function projects() {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = 'PROJECTS' text = 'Some of my most Recent Works'/>
      <Work />
    </div>
  )
}

export default projects