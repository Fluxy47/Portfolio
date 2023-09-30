import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Project from "../Components/Project";

function Projects({ currentFragment, visitedFragments }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [finalX, setFinalX] = useState(0);

  useEffect(() => {
    if (currentFragment === "Projects") {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [currentFragment]);

  useEffect(() => {
    if (shouldAnimate) {
      setFinalX(0);
    } else if (!shouldAnimate && visitedFragments) {
      setTimeout(() => {
        setFinalX("-200vw");
      }, 800);
    } else {
      setFinalX("100vw");
    }
  }, [shouldAnimate, visitedFragments]);

  const finalY = shouldAnimate ? "-100%" : visitedFragments ? "-500%" : 0;

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
      <motion.section className="flex flex-col w-full h-screen ">
        {customDelays.map((item, index) => (
          <motion.div
            className="w-full h-[20vh] bg-gradient-to-l from-[#361b34] to-[#03051a]    "
            key={index}
            initial={{ x: "100vw", y: "-100vh" }}
            animate={{ x: finalX }}
            transition={{
              delay: shouldAnimate ? item.delay : 2,
              ease: [0.6, 0.01, -0.05, 0.95],
            }} // Pass delay value as custom prop
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
