import { Link } from "react-router-dom"
import "./AboutContent.css"
import webdev from '../assets/webdev.png'
import datavis from '../assets/datavis.png'

import React from 'react'

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hello! I'm Aditya Mathur, a first-year undergrad at Newton School of Technology, Rishihood University. I'm passionate about Technology, Web Development, especially using HTML, CSS, JavaScript, React JS, Python3 and MySQL.I've built projects like a weather checking website and a Gemini clone with React.js. And I am very Excited to grow and contribute to the tech community!</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={webdev} alt="Image" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={datavis} alt="Image" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent