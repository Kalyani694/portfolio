import React from 'react'
import "./navbar.scss"
import { motion } from 'framer-motion'
//import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale: 1}} transition={{duration:0.5}} >Kalyani Borase</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=61567086344335&mibextid=ZbWKwL"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/borasek5987/profilecard/?igsh=MW1tamRndTJweDVtZw=="><img src="/instagram.png" alt="" /></a>
                <a href="https://youtube.com/@kalyaniborase4072?si=rgaBnnrva0H0v2mg"><img src="/youtube.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/kalyani-borase-708213244/"><img src="/linkedin.webp" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar