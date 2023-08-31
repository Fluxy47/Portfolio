import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Card({
  item,
  setSelected,
  SelectedFunc,
  SelectedFunc2,
  isButtonClicked,
  willAnimate,
  isShow,
}) {
  const handleClick = (item) => {
    if (isButtonClicked === false) {
      SelectedFunc(item);
    } else {
      SelectedFunc2();
    }
  };

  return (
    <motion.div
      className=" w-full lg:w-[430px]  h-[300px] relative bg-slate-800 "
      layout
      animate={{ height: willAnimate ? "400px" : "300px" }}
    >
      <img
        src=""
        alt="project-pic"
        className="object-cover h-[200px] w-[429px]"
      />
      <h1 className="text-white bg-slate-900 text-[1.6em] pb-[10px] pl-[120px]">
        {item?.title}
      </h1>
      <AnimatePresence mode="wait">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isShow ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-[1.1em] text-center   text-white"
        >
          this project is about youtube with lots of animation and i wanted to
          see if it was possible
        </motion.p>
      </AnimatePresence>
      <motion.button
        className="bg-red-500 w-[130px] h-[50px] absolute bottom-0 left-1/2 -translate-x-1/2 "
        onClick={() => handleClick(item)}
      >
        {/* {isButtonClicked ? "Close Project" : "View Project"} */}
      </motion.button>
    </motion.div>
  );
}

export default Card;
