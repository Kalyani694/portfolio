import React, { useRef } from 'react'
import "./services.scss"
import { animate, motion, useInView } from 'framer-motion'

const variavts={
    initial:{
        x: -500,
        y: 100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildern: 0.1,

        }
    }
}
const Services = () => {
   const ref= useRef() 
   const isInView= useInView(ref,{margin:"-100px"})
  return (
    
    <motion.div className='services' variants={variavts} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variavts}>
            <p>I specialize in building scalable, responsive, and user-friendly web solution
                <br />that align with industry standards.
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variavts}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><b>Unique</b> Ideas</h1>
            </div>
            <div className="title">
                
                <h1><b>For Your</b> Business.</h1>
                <button>What we do?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variavts}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Web Development Services</h2>
                <p>Professional website development tailored to your needs.Expertise in creating responsive and dynamic websites using React.js, JavaScript, and modern frameworks.
Custom solutions for personal, business, or educational projects.
</p>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Programming Language Training</h2>
                <p>Comprehensive lessons in foundational programming languages:
C: Understanding fundamentals of logic and programming structures.
Java: Object-oriented programming and application development.
Python: Writing clean, efficient code and exploring libraries for versatile applications.</p>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Data Structures and Algorithms (DSA)</h2>
                <p>
                Practical training in solving real-world problems using DSA.Understanding core concepts like arrays, linked lists, trees, graphs, and dynamic programming.
Focus on optimizing solutions for performance.

                </p>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Services