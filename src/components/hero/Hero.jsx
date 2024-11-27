import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Hero = () => {
  const handleDownload = () => {
    // Use the direct download link or host the resume in the public folder
    const resumeUrl ="https://drive.google.com/file/d/1EFQsIoqwxVAMdm5Qvhm7a2sIv7T1GJQr/view?usp=drivesdk";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Kalyani_Borase_cv.pdf"; // Name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hi,</motion.h2>
          <motion.h1 variants={textVariants}>
            I am Web Developer and Coding Teacher
          </motion.h1>
          <motion.div className="buttons">
            <motion.button onClick={handleDownload}
              variants={textVariants}
              style={{ cursor: "pointer" }}
            >
              Resume
            </motion.button>
            <a href="#Contact">
            <motion.button 
              variants={textVariants}
              style={{ cursor: "pointer" }}
            >
              Contact Me
            </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="imageContainer">
        <img src="/home.png" alt="" />
      </div>
    </div>
    
  );
};

export default Hero;
