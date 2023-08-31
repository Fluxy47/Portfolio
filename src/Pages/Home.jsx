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

  const finalY = shouldAnimate ? 0 : visitedFragments ? "-260%" : 0;
  const finalO = shouldAnimate ? 1 : 0;

  return (
    <motion.div
      className="h-screen app-bg overflow-hidden "
      style={{
        zIndex: shouldAnimate ? 10 : 1,
      }}
    >
      <motion.section className="flex  w-full h-screen ">
        {customDelays.map((item, index) => (
          <motion.div
            className="w-[20vw] h-screen  app-bg border-none "
            key={index}
            initial={{ y: 0 }}
            animate={{ y: finalY }}
            transition={{ delay: item.delay, ease: [0.6, 0.01, -0.05, 0.95] }} // Pass delay value as custom prop
          />
        ))}
      </motion.section>
      <motion.div
        className="absolute top-0"
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
