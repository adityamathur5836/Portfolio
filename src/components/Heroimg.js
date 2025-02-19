import './Heroimg.css';
import Introimg from '../assets/intro-img.jpg'
import React from 'react'
import { Link } from 'react-router-dom';

function Heroimg() {
  return (
    <div className='hero'>
        <div className='mask'>
             <img className='intro-img' src={Introimg} alt='IntroImg'/>
        </div>
        <div className='content'>
            <p>Hi, I'M Aditya Mathur</p>
            <h1>First Year Undergrad</h1>
            <div>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
};

export default Heroimg