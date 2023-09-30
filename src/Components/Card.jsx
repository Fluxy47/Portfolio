import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

function Card({ item, index, willAnimate, handleClick }) {
  return (
    <div
      onClick={() => handleClick(index)}
      className={`w-[80vw] h-[50vh] lg:w-[430px] card ${
        index === willAnimate ? "active" : ""
      }`}
    >
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
      {willAnimate === index && (
        <motion.button
          className={
            willAnimate === index ? "active btn2 fourth" : "btn2 fourth"
          }
        >
          View Project
        </motion.button>
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
