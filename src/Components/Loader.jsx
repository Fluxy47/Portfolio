import React from "react";
import { motion } from "framer-motion";
const animationvar = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.5,
    },
  },
};
function Loader() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-[999999] flex items-center justify-center bg-[#f1c40f] "
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="body">
        <motion.span
          variants={animationvar}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </motion.span>
        <motion.div
          className="base"
          variants={animationvar}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <span></span>
          <div className="face"></div>
        </motion.div>
      </div>

      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <motion.h1
        className="absolute font-semibold text-[20px] uppercase left-[50%] top-[55%] ml-[-35px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        Loading
      </motion.h1>
    </motion.div>
  );
}

export default Loader;
