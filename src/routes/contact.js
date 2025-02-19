import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = 'Contact' text = "Let's Have a Chat"/>
      <Form />
    </div>
  )
}

export default Contact