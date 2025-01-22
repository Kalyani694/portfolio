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
            <a href="https://leetcode.com/u/kalyaniborase/"><img src="https://shopallpremium.com/wp-content/uploads/2022/02/LeetCode_logo_rvs.png" alt="" /></a>
            <a href="https://www.hackerrank.com/profile/borasek694"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2XugPqx2uT1Jy3Utrp8ZwUdBEZ0PB6B39A&s" alt="" /></a>
            <a href="https://www.naukri.com/code360/profile/3640816d-f281-4eac-ac96-f97920a86c2d"><img src="https://yt3.googleusercontent.com/l3rB5iGz7zH2JQzZKZ3gBI-8oow6edAquxvQapNtNhy__VdbIDHxbvJJGT8YuvVkqjoQXDeS5w=s900-c-k-c0x00ffffff-no-rj" alt="" /></a>
                <a href="https://github.com/Kalyani694/"><img src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-iw6ut8fe.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/kalyani-borase-708213244/"><img src="/linkedin.webp" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar