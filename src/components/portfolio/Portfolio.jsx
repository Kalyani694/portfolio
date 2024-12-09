import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
//import { desc, title } from 'framer-motion/client'
const items = [{
    id: 1,
    title: "Institute Website",
    img: "/institute.png",
    desc: "This project is a comprehensive website designed for a computer institute to manage courses, showcase offerings, and provide a seamless experience for students and visitors.",
    demo: "https://korus-infotech.netlify.app/",
    source:""
    
},
{
    id: 2,
    title: "Social Media",
    img: "/social.png",
    desc: "Social is a modern social media web application designed to connect users and facilitate communication, content sharing, and community building.User registration and authentication (with email/password or OAuth).Profile creation and customization.Post creation, editing, and deletion",
    demo:"https://6746ca2d5958cfae805a34dc--timely-yeot-4ff82c.netlify.app/",
    source:"https://github.com/Kalyani694/social_media",
},
{
    id: 3,
    title:"Rent House",
    img:"/renthouse.png",
    desc:"RentHouse is a comprehensive platform designed to simplify the process of renting properties. It connects property owners and tenants, offering an easy-to-use interface for listing, searching, and managing rental properties. This app is working mode it is complete Frontend and backend working will be at your service soon...",
    demo:"https://rent-house-10.onrender.com/",
    source:"https://github.com/Kalyani694/rent_house-UI",
},
];
const Single=({item})=>{
    const ref=useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
       // offset:["start start","end start"]
    });

    const y= useTransform(scrollYProgress, [0,1],[-300, 300]);
    return <section >
        <div className="container">
            <div className="wrapper">
                <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="buttonContainer">
                    <a href={item.demo}>
                <button>See Demo</button>
                </a>
                <a href={item.source}>
                <button>Source Code</button>
                </a>
                </div>
            </motion.div>
            </div>
        </div>
    </section>
}
const Portfolio = () => {
    const ref= useRef()
    const {scrollYProgress}= useScroll({target:ref,offset:["end end","start start"]});
    const scaleX= useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item)=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Portfolio