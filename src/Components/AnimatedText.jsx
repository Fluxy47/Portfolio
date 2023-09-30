import React from "react";

function AnimatedText({ text, myclass }) {
  const wordsArray = text.split(" ");
  const wordElements = wordsArray.map((word, index) => (
    <span
      key={index}
      className={myclass}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {word}{" "}
    </span>
  ));

  return <>{wordElements}</>;
}

export default AnimatedText;
