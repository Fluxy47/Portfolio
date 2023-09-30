import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Landing from "../Components/Landing";

function Home({ currentFragment, visitedFragments }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (currentFragment === "Home") {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [currentFragment]);

  const customDelays = [
    { num: 1, delay: 0.3 },
    { num: 2, delay: 0.6 },
    { num: 3, delay: 0.9 },
    { num: 4, delay: 1.2 },
    { num: 5, delay: 1.5 },
  ];
  const finalY = shouldAnimate ? 0 : visitedFragments ? "-700%" : 0;
  const finalO = shouldAnimate ? 1 : 0;

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
            className="w-[20vw] h-screen bg-black  "
            key={index}
            initial={{ y: 0 }}
            animate={{ y: finalY }}
            transition={{
              delay: shouldAnimate ? item.delay : 2,
              ease: [0.6, 0.01, -0.05, 0.95],
            }} // Pass delay value as custom prop
          />
        ))}
      </motion.section>
      <motion.div
        className="absolute top-0 "
        initial={{ opacity: 0 }}
        animate={{ opacity: finalO }}
        transition={{ delay: shouldAnimate ? 2.5 : 0 }}
      >
        <Landing shouldAnimate={shouldAnimate} finalY={finalY} />
      </motion.div>
    </motion.div>
  );
}

export default Home;
