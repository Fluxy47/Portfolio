import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AboutMe from "../Components/AboutMe";

function About({ currentFragment, visitedFragments }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (currentFragment === "About-Me") {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [currentFragment]);
  const finalY = shouldAnimate ? "-200%" : visitedFragments ? "-700%" : 0;
  const finalX = shouldAnimate ? 0 : visitedFragments ? "200vw" : "-100vw";

  const customDelays = [
    { num: 1, delay: 0.3 },
    { num: 2, delay: 0.6 },
    { num: 3, delay: 0.9 },
    { num: 4, delay: 1.2 },
    { num: 5, delay: 1.5 },
  ];

  return (
    <motion.div
      className="h-screen w-screen  "
      style={{
        position: "relative",
        zIndex: shouldAnimate ? 10 : 1,
      }}
    >
      <motion.section className="flex flex-col  w-full h-screen ">
        {customDelays.map((item, index) => (
          <motion.div
            className="w-full h-[20vh] bg-black border-none "
            key={index}
            initial={{ x: "-100vw", y: "-200vh" }}
            animate={{ x: finalX }}
            transition={{
              delay: shouldAnimate ? item.delay : 2,
              ease: [0.6, 0.01, -0.05, 0.95],
            }} // Pass delay value as custom prop
          />
        ))}
      </motion.section>
      <AnimatePresence>
        <motion.div
          className="absolute top-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldAnimate && 1 }}
          transition={{ delay: shouldAnimate ? 2.5 : 0 }}
        >
          <AboutMe shouldAnimate={shouldAnimate} finalY={finalY} />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default About;
