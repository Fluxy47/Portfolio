import React, { useState } from "react";

function Testing() {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY); // Use clientY to get the initial vertical position
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY); // Use clientY for vertical position

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance; // Check if the distance is positive for an up swipe
    const isDownSwipe = distance < -minSwipeDistance; // Check if the distance is negative for a down swipe
    if (isUpSwipe || isDownSwipe)
      console.log("swipe", isUpSwipe ? "up" : "down");
    // add your conditional logic here
  };

  return (
    <div
      className="bg-black h-screen w-full "
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    ></div>
  );
}

export default Testing;
