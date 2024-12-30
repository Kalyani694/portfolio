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
                <a href="https://www.facebook.com/share/p/19kHetVMc8/"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/p/DD95rRTuvkq/?igsh=MWprNmcyM2VvaDhkYg=="><img src="/instagram.png" alt="" /></a>
                <a href="https://github.com/Kalyani694/"><img src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-iw6ut8fe.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/kalyani-borase-708213244/"><img src="/linkedin.webp" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar