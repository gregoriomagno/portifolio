import { motion } from "framer-motion";
import React from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
const Tag = () => {
  // line one

  const y1Base1 = 170;
  const x1Base1 = 0; //220
  const y2Base1 = 30;
  const x2Base1 = 160;
  // line two
  const y1Base2 = 170;
  const x1Base2 = 0; //220
  const y2Base2 = 300;
  const x2Base2 = 160;

  const strokeWidth =20
  const dist = 100
  
  return (
    <motion.svg
      width="400"
      height="300"
      viewBox="0 0 300 600"
      initial="hidden"
      animate="visible"
    
    >
     {/* left */}
      <motion.line
        x1={x1Base1}
        y1={y1Base1}
        x2={x2Base1}
        y2={y2Base1}
        strokeWidth={strokeWidth}
        stroke="white"
        variants={draw}
        custom={2.5}
      />
     
      <motion.line
        x1={x1Base2}
        y1={y1Base2}
        x2={x2Base2}
        y2={y2Base2}
        strokeWidth={strokeWidth}
        stroke="white"
        variants={draw}
        custom={2.5}
      />
      {/* barra */}
      <motion.line
     
        x1={190 }
        y1={300 }
        x2={290}
        y2={0}
        strokeWidth={strokeWidth}
        stroke="blue"
        variants={draw}
        custom={2.5}
      />
       {/* right */}
       <motion.line
        x1={x1Base1 + 480}
        y1={y1Base1 }
        x2={x2Base1+200}
        y2={y2Base1}
        strokeWidth={strokeWidth}
        stroke="white"
        variants={draw}
        custom={2.5}
      />
      <motion.line
        x1={x1Base2 +480}
        y1={y1Base2}
        x2={x2Base2+200}
        y2={y2Base2}
        strokeWidth={strokeWidth}
        stroke="white"
        variants={draw}
        custom={2.5}
      />
      {/* \ */}
      {/* <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="300"
        
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      /> */}
      {/* <motion.line
        x1={x1Base}
        y1={y1Base}
        x2={x2Base}
        y2={y2Base}
        strokeWidth="4"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      /> */}
      {/* <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="300"
        
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      /> */}
      {/* <motion.line
      
        x1={x1Base}
        y1={y1Base}
        x2={x2Base}
        y2={y2Base}
        
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      /> */}
      {/* <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      /> */}
    </motion.svg>
  );
};

export default Tag;
