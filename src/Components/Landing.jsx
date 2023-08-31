import React, { useEffect, useState } from "react";
import BlueMoon from "../Assests/BlueMoon.jpg";
import Wild from "../Assests/Wild.jpg";
import Last from "../Assests/Last.jpg";
import Lo1 from "../Assests/Lo1.png";
import man7 from "../Assests/man7.webp";
import Lo2 from "../Assests/Lo2.jpg";
import Lo3 from "../Assests/Lo3.jpg";
import Lo4 from "../Assests/Lo4.jpg";
import Lo5 from "../Assests/Lo5.jpg";
import Lo6 from "../Assests/Lo6.jpg";
import contactBackground from "../Assests/contactBackground.jpg";
import ChasingDream from "../Assests/ChasingDream.png";
import Banner from "../Assests/Banner.jpg";
import { motion } from "framer-motion";

function Landing({ finalY, shouldAnimate }) {
  return (
    <motion.div
      className=" relative  h-screen w-screen  "
      style={{
        zIndex: shouldAnimate ? 10 : 1,
      }}
      initial={{ y: 0 }}
      animate={{
        y: finalY,
      }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <img
        src={man7}
        className="image-class w-full h-[70vh] md:h-[80vh] lg:w-[720px] lg:h-[600px]"
      />

      <img
        src={ChasingDream}
        alt="boom2"
        className="image-class2 absolute bottom-0 left-1/2 -translate-x-1/2 clipped-image"
      />
    </motion.div>
  );
}

export default Landing;

{
  /* <div className="image-container">
        <div className="relative top-[18rem] left-[35rem] w-[255px] h-[80px] border-2 border-solid z-[15] bg-transparent">
          <h1 className="relative right-10 whitespace-nowrap text-white bg-transparent text-[3em] leading-wider">
            Muhammad Ali
          </h1>
        </div>
        <motion.img
          src={man7}
          alt="landingPic"
          className="image-class"
          // initial={{ scale: 4 }} 
          // animate={{ scale: 1, x: [0, 200, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
        />
      </div>
      <div className="relative flex top-[55px]">
        <img src={Lo3} alt="boom1" className="image-class1 " />
        <img src={ChasingDream} alt="boom2" className="image-class2" />
        <img src={Lo3} alt="boom3" className="image-class3" />
      </div> */
}
