import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import WorkImage from "../Assests/svg/work.svg";

function AboutMe({ shouldAnimate, finalY }) {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Reactjs", "Framer Motion", "Tailwind Css", "Sass"],
      typeSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => {
      typed.destroy(); // Cleanup the Typed instance on unmount
    };
  }, []);

  return (
    <motion.div
      className="h-screen w-screen overflow-hidden "
      style={{
        position: "relative",
        zIndex: shouldAnimate ? 10 : 1,
      }}
      initial={{ y: 0 }}
      animate={{
        y: finalY,
      }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <motion.div
        whileTap={{
          scale: 0.95,
        }}
      >
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: shouldAnimate ? 1 : 0,
            y: shouldAnimate ? 0 : 10,
          }}
          transition={{ delay: 0.9 }}
          src={WorkImage}
          alt="work"
          className=" hidden lg:block w-[45vw] h-[70vh] absolute  right-5 top-[100px]"
        />
      </motion.div>
      <div className="flex flex-col mt-[5vh] h-[95vh] lg:w-[55vw] border-2 border-red-600">
        <div className="border-2 border-[blue] h-[40vh]">
          <motion.h1 className="text-white text-[3em] text-center mt-[3%]">
            About Me
          </motion.h1>
          <div className="flex w-full border-2 border-[green] items-center justify-center">
            <h1
              className="text-white "
              style={{ fontSize: "clamp(23px,3vw,34px)" }}
            >
              My main skills are {""}
            </h1>
            <span
              className="text-white "
              style={{ fontSize: "clamp(25px,4vw,34px)" }}
              ref={typedElementRef}
            >
              {""}
            </span>
          </div>
        </div>
        <div className=" h-[60vh] ">
          <p className="text-white text-clamp1 md:text-clamp2 lg:text-clamp1 text-center ">
            As a front-end developer, I dive into the realm where technology and
            art converge. With every line of code, I sculpt immersive
            experiences that bridge innovation with aesthetics. I'm driven by a
            passion to create digital landscapes that tell stories, evoke
            emotions, and forge connections. My work harmonizes functionality
            and beauty, crafting interfaces that are not just seamless, but
            profoundly captivating. Join me in reshaping the digital frontier,
            where every pixel and interaction is a stroke of genius.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
