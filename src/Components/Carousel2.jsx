import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
function Carousel2() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="h-full w-full bg-[black]">
      {!selected && (
        <div className="max-h-[120px] border-solid border-[1px] border-white flex overflow-x-auto relative top-[50%]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId={`card-`}
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
            className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"
            onClick={() => setSelected(true)}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId={`card-`}
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
            className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"
            onClick={() => setSelected(true)}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId={`card-`}
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
            className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"
            onClick={() => setSelected(true)}
          ></motion.div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
          <div className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"></div>
        </div>
      )}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            layoutId={`card-`}
            onClick={() => setSelected(null)}
            className="min-w-[110px] h-[110px] leading-[110px] text-center bg-[#ddd] mr-[2px]"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Carousel2;
