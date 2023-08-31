import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Tuffy = ({ shouldAnimate, visitedFragments }) => {
  const finalY = shouldAnimate ? "-100%" : visitedFragments ? "-260%" : 0;

  return (
    <motion.div
      className="w-screen h-screen "
      style={{
        position: "relative",
        zIndex: shouldAnimate ? 10 : 1,
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: finalY, opacity: 1 }}
      transition={{ delay: 2, type: "tween" }}
    >
      <h1 className="text-[10em] text-black absolute top-0">hello world</h1>
    </motion.div>
  );
};

export default Tuffy;
