import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import ContactMe from "../Components/ContactMe";
import contactBackground from "../Assests/contactBackground.jpg";

function Contact({ currentFragment, visitedFragments }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (currentFragment === "Contact-Me") {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [currentFragment]);

  const finalY = shouldAnimate ? "-300%" : visitedFragments ? "-800%" : 0;
  const customDelays = [
    { num: 1, delay: 0.6 },
    { num: 2, delay: 0.9 },
    { num: 3, delay: 1.2 },
    { num: 4, delay: 1.5 },
    { num: 5, delay: 1.8 },
  ];

  const finalO = shouldAnimate ? 1 : 0;
  const partWidth = -1 / 4;

  return (
    <motion.div
      className="h-screen contact-container"
      style={{
        position: "relative",
        zIndex: shouldAnimate ? 10 : 1,
      }}
    >
      <motion.section className="flex  w-full h-screen bg-divided-image">
        {customDelays.map((item, index) => (
          <motion.div
            className="w-[20vw] h-screen  border-none "
            style={{
              backgroundImage: `url(${contactBackground})`,
              backgroundPosition: `${-index * partWidth * 100}% 0%`,
              backgroundSize: `500% 100%`, // The width of the image * 5
            }}
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
        className="absolute top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: finalO }}
        transition={{ delay: shouldAnimate ? 2.5 : 0 }}
      >
        <ContactMe shouldAnimate={shouldAnimate} finalY={finalY} />
      </motion.div>
    </motion.div>
  );
}

export default Contact;
