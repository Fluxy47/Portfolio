import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { myProjects } from "../Utils/Constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Components/Card";
import Modal from "../Components/Modal";
import Project from "../Components/Project";

function Projects({ currentFragment, visitedFragments }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [finalY, setFinalY] = useState(0);

  useEffect(() => {
    if (currentFragment === "Projects") {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [currentFragment]);

  useEffect(() => {
    if (shouldAnimate) {
      setFinalY("-100%");
    } else if (!shouldAnimate && visitedFragments) {
      setTimeout(() => {
        setFinalY("-500%");
      }, 800);
    } else {
      setFinalY("0");
    }
  }, [shouldAnimate, visitedFragments]);

  const customDelays = [
    { num: 1, delay: 0.3 },
    { num: 2, delay: 0.6 },
    { num: 3, delay: 0.9 },
    { num: 4, delay: 1.2 },
    { num: 5, delay: 1.5 },
  ];

  const finalO = shouldAnimate ? 1 : 0;
  // const finalO = shouldAnimate ? 1 : visitedFragments ? 0 : 0;
  return (
    <motion.div
      className=" relative  h-full w-full  "
      style={{
        zIndex: shouldAnimate ? 10 : 1,
      }}
    >
      <motion.section className="flex  w-full h-screen ">
        {customDelays.map((item, index) => (
          <motion.div
            className="w-[20vw] h-screen  bg-[black] border-y-2 border-white  "
            key={index}
            initial={{ y: 0 }}
            animate={{ y: finalY }}
            transition={{ delay: item.delay, ease: [0.6, 0.01, -0.05, 0.95] }} // Pass delay value as custom prop
          />
        ))}
      </motion.section>
      <motion.div
        className="absolute top-0 border-2 border-red-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: finalO }}
        transition={{ delay: shouldAnimate ? 2.5 : 0 }}
      >
        <Project finalY={finalY} shouldAnimate={shouldAnimate} />
      </motion.div>
    </motion.div>
  );
}

export default Projects;
