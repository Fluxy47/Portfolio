import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { myProjects } from "../Utils/Constant";
import Card from "./Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Project({ finalY, shouldAnimate }) {
  const [willAnimate, setWillAnimate] = useState(-1);
  const [xOffset, setXOffset] = useState(0);
  const handleClick = (index) => {
    setWillAnimate((prevIndex) => (prevIndex === index ? -1 : index)); // Set the index of the clicked card
  };

  const trackRef = useRef(null);
  const mouseDownAtRef = useRef(0);
  const prevPercentageRef = useRef(0);

  // const handleOnDown = (e) => {
  //   mouseDownAtRef.current = e.clientX;
  // };

  // const handleOnUp = () => {
  //   mouseDownAtRef.current = 0;
  //   prevPercentageRef.current = trackRef.current.dataset.percentage;
  // };

  // const handleOnMove = (e, isTouch = false) => {
  //   if (mouseDownAtRef.current === 0) return;

  //   const mouseDelta = parseFloat(mouseDownAtRef.current) - e.clientX;

  //   const screenWidth = window.innerWidth;

  //   // Calculate the percentage of drag movement
  //   const percentage = (mouseDelta / (screenWidth / 2)) * -100;

  //   // Define the maximum allowed percentage value for dragging right (30% to the right)
  //   let maxPercentage = 0;
  //   let minPercentage = -70;

  //   if (screenWidth <= 767) {
  //     // For mobile devices
  //     maxPercentage = 0;
  //     minPercentage = -250;
  //   } else if (screenWidth <= 1024) {
  //     // For tablets
  //     maxPercentage = 0;
  //     minPercentage = -250;
  //   } else {
  //     // For larger devices
  //     maxPercentage = 0;
  //     minPercentage = 0;
  //   }

  //   // Calculate the next percentage position with the restriction
  //   const nextPercentageUnconstrained =
  //     parseFloat(prevPercentageRef.current) + percentage;

  //   // Define the minimum allowed percentage value for dragging left (-50% to the left)

  //   // Calculate the next percentage position with both restrictions
  //   const nextPercentage = Math.min(
  //     Math.max(nextPercentageUnconstrained, minPercentage),
  //     maxPercentage
  //   );

  //   trackRef.current.dataset.percentage = nextPercentage;
  //   setXOffset(nextPercentage);
  //   // prevPercentageRef.current =
  //   //   parseFloat(trackRef.current.dataset.percentage) || 0;
  // };

  // useEffect(() => {
  //   if (!isNaN(prevPercentageRef.current)) {
  //     // Animate the flexbox container using xOffset state
  //     trackRef.current.animate(
  //       {
  //         transform: `translate(${xOffset}%, 0%)`,
  //       },
  //       { duration: 2200, fill: "forwards", easing: "ease-in-out" } // Smooth animation
  //     );
  //   }
  // }, [xOffset]);

  // useEffect(() => {
  //   // Attach drag events to the entire document
  //   document.addEventListener("mousedown", handleOnDown);
  //   document.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
  //   document.addEventListener("mouseup", handleOnUp);
  //   document.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));
  //   document.addEventListener("mousemove", handleOnMove);
  //   document.addEventListener("touchmove", (e) =>
  //     handleOnMove(e.touches[0], true)
  //   );

  //   return () => {
  //     // Remove the drag events when the component unmounts
  //     document.removeEventListener("mousedown", handleOnDown);
  //     document.removeEventListener("touchstart", (e) =>
  //       handleOnDown(e.touches[0])
  //     );
  //     document.removeEventListener("mouseup", handleOnUp);
  //     document.removeEventListener("touchend", (e) => handleOnUp(e.touches[0]));
  //     document.removeEventListener("mousemove", handleOnMove);
  //     document.removeEventListener("touchmove", (e) =>
  //       handleOnMove(e.touches[0], true)
  //     );
  //   };
  // }, []);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: {
      perView: 3,
      spacing: 1,
    },
  });

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
      transition={{ duration: 1, delay: 1.5 }}>
      <section className="flex  flex-col h-screen w-full items-center justify-center">
        <h1 className="fixed top-7 text-[3em]  sm:text-[4em] text-white tracking-wider text-center ">
          Projects
        </h1>
        <div ref={sliderRef} className="keen-slider">
          {myProjects.map((item, index) => (
            <div className="keen-slider__slide " key={item.id}>
              <Card
                item={item}
                handleClick={handleClick}
                willAnimate={willAnimate}
                index={index}
              />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
