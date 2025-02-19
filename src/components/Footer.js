import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './Footer.css'

import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <div>
                        <p>6/402, Laxmi Marg, SFS, Mansarovar</p>
                        <p>Jaipur, Rajasthan, India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                        +91-7357494567
                    </h4>
                </div>
                <div className='email'>
                <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    aditya.2024@nst.rishihood.edu.in
                </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About Me</h4>
                <p>A Software, Frontend Developer proficient in HTML, CSS, JavaScript, React Js, MySQL, Python. Solved more than 140 Questions on LeetCode using.</p>
                <div className='social'>
                    <a href='https://www.instagram.com/adityamathur70/'><FaInstagram size={30} style={{color:'#fff', marginRight:'1rem'}}/></a>
                    <a href='https://x.com/Aditya_5934'><FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}}/></a>
                    <a href='https://www.linkedin.com/in/aditya-mathur-734548323/'><FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer