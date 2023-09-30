import React, { useState } from "react";

function Testing() {
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);
  const [direction, setDirection] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
    setEndY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    let swipeDirection = null;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        swipeDirection = "right";
      } else {
        swipeDirection = "left";
      }
    } else {
      if (deltaY > 0) {
        swipeDirection = "down";
      } else {
        swipeDirection = "up";
      }
    }

    setDirection(swipeDirection);
  };
  return (
    <div className="bg-black h-screen w-full">
      {" "}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ width: "100px", height: "100px", background: "lightblue" }}
      >
        Swipe me
        <div>Direction: {direction}</div>
      </div>
    </div>
  );
}

export default Testing;
