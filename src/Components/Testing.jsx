import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tuffy from "./Tuffy";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3, // Stagger delay between children
    },
  },
  exit: {},
};

function Testing({ currentFragment, visitedFragments }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (currentFragment === "Testing") {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [currentFragment]);

  const finalY = shouldAnimate ? "-100%" : visitedFragments ? "-260%" : 0;
  const finalO = shouldAnimate ? 1 : visitedFragments ? 0 : 0;
  console.log("olol:", finalY);
  const customDelays = [
    { num: 1, delay: 0.3 },
    { num: 2, delay: 0.6 },
    { num: 3, delay: 0.9 },
    { num: 4, delay: 1.2 },
    { num: 5, delay: 1.5 },
  ];
  return (
    <div className="h-screen w-screen relative">
      <motion.section className="flex  w-full h-screen ">
        {customDelays.map((item, index) => (
          <motion.div
            className="w-[20vw] h-screen  bg-[#311931] border-none "
            key={index}
            initial={{ y: 0 }}
            animate={{ y: finalY }}
            transition={{ delay: item.delay }} // Pass delay value as custom prop
          />
        ))}
      </motion.section>
      <motion.div
        className="absolute top-0 border-2 border-red-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: finalO }}
        transition={{ delay: 2.5 }}
      >
        <Tuffy
          shouldAnimate={shouldAnimate}
          visitedFragments={visitedFragments}
        />
      </motion.div>
    </div>
  );
}

export default Testing;
