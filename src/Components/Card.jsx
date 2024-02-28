import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

function Card({ item, index, willAnimate, handleClick }) {
  return (
    <div
      onClick={() => handleClick(index)}
      className={`w-full h-[50vh]   card ${
        index === willAnimate ? "active" : ""
      }`}>
      {willAnimate != null && (
        <>
          <div className="card-title">
            <AnimatedText
              text={item.title}
              myclass={`card-subtitle-word ${
                willAnimate === index ? "active" : ""
              }`}
            />
          </div>
          <div className="card-subtitle">
            <AnimatedText
              text={item.description}
              myclass={`card-subtitle-word ${
                willAnimate === index ? "active" : ""
              }`}
            />
          </div>
        </>
      )}

      <div className="flex absolute bottom-0 w-full z-[2]  items-center justify-center ">
        <a href={item.link} target="_blank" rel="noreferrer">
          <motion.button className="btn2 fourth">View Project</motion.button>
        </a>
      </div>
    </div>
  );
}

export default Card;
