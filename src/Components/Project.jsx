import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { myProjects } from "../Utils/Constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import Modal from "./Modal";

function Project({ finalY, shouldAnimate }) {
  const [selected, setSelected] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [willAnimate, setWillAnimate] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const SelectedFunc = (item) => {
    setSelected(item);

    setTimeout(() => {
      setWillAnimate(true);
    }, 1000);
    setTimeout(() => {
      setIsShow(true);
    }, 2000);
  };

  return (
    <motion.div
      className=" relative  h-screen w-screen  "
      style={{
        zIndex: shouldAnimate ? 10 : 1,
      }}
      initial={{ y: 0 }}
      animate={{
        y: finalY,
      }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <h1 className=" text-[3em]  sm:text-[4em] text-white tracking-wider text-center pt-[50px] mb-[20px]">
        Projects
      </h1>
      <AnimatePresence mode="wait">
        {!selected && (
          <div className="flex w-full overflow-x-auto gap-5  lg:overflow-hidden lg:justify-evenly ">
            {myProjects.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId={`card-${item.id}`}
                whileHover={{
                  scale: 1.025,
                  transition: {
                    duration: 0.2,
                  },
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <Card
                  item={item}
                  setSelected={setSelected}
                  isButtonClicked={isButtonClicked}
                  SelectedFunc={SelectedFunc}
                />
              </motion.div>
            ))}
          </div>
        )}

        {selected && (
          <Modal
            selected={selected}
            setSelected={setSelected}
            willAnimate={willAnimate}
            setWillAnimate={setWillAnimate}
            setIsShow={setIsShow}
            isShow={isShow}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Project;
