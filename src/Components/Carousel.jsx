import { useEffect, useState } from "react";
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: {
    x: 10,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: -10,
    opacity: 0,
  },
};
function Carousel({ navAnimation }) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const items = ["ReactJs", "Framer Motion", "Sass", "Tailwind Css"];

  useEffect(() => {
    let intervalId;
    const handleAutoplay = () => {
      paginate(1);
    };

    intervalId = setInterval(handleAutoplay, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const imageIndex = wrap(0, items.length, page);

  const paginate = (newDirection) => {
    setPage((prevPage) => wrap(0, items.length, prevPage + newDirection));
    setDirection(newDirection);
  };
  return (
    <div className="relative top-[-500px]">
      <AnimatePresence initial={false} custom={direction}>
        <div className=" h-[50px] w-[100px]">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            onHoverStart={() => {
              paginate(1);
            }}
            onHoverEnd={() => {
              paginate(-1);
            }}
            className="relative left-[240px]  "
          >
            <motion.h1
              variants={navAnimation}
              className="text-[1.3em] font-semibold"
            >
              {items[imageIndex]}
            </motion.h1>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
