import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
function Modal({
  selected,
  setSelected,
  setWillAnimate,
  willAnimate,
  setIsShow,
  isShow,
}) {
  if (!selected) {
    return <></>;
  }

  const SelectedFunc2 = () => {
    setTimeout(() => {
      setSelected(null);
    }, 2000);
    setTimeout(() => {
      setWillAnimate(false);
    }, 1000);

    setIsShow(false);
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex justify-center h-full w-full"
    >
      <motion.div
        layoutId={`card-${selected.id}`}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <Card
          item={selected}
          SelectedFunc2={SelectedFunc2}
          willAnimate={willAnimate}
          isShow={isShow}
        />
      </motion.div>
    </div>
  );
}

export default Modal;
