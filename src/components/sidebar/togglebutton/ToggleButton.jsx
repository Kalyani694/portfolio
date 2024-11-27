import React from 'react';
import { motion } from 'framer-motion';
const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)} aria-label="Toggle sidebar">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path d="M2 2.5h20" strokeWidth="3" stroke="black" strokeLinecap="round" variants={{closed:{d:"M2 2.5 L 20 2.5"}, open:{d:"M 3 16.5 L 17 2.5"}, }} />
        <motion.path d="M2 10.5h20" strokeWidth="3" stroke="black" strokeLinecap="round" variants={{closed:{opacity:1}, open:{opacity:0},}}/>
        <motion.path d="M2 18.5h20" strokeWidth="3" stroke="black" strokeLinecap="round" variants={{closed:{d:"M 2 16.346 L 20 16.346"}, open:{d:"M 3 2.5 L 17 16.346"},}}/>
      </svg>
    </button>
  );
};

export default ToggleButton;
