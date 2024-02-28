import man7 from "../Assests/man7.png";
import { motion } from "framer-motion";

function Landing({ finalY, shouldAnimate }) {
  return (
    <motion.div
      className=" relative  h-screen w-screen  overflow-hidden"
      style={{
        zIndex: shouldAnimate ? 10 : 1,
      }}
      initial={{ y: 0 }}
      animate={{
        y: finalY,
      }}
      transition={{ duration: 1, delay: 1.5 }}>
      <motion.img
        initial={{ y: 20, x: 50, opacity: 0 }}
        animate={{
          opacity: shouldAnimate ? 1 : 0,
          y: shouldAnimate ? 0 : 20,
          x: shouldAnimate ? 0 : 50,
        }}
        transition={{ duration: 0.3, delay: 3 }}
        src={man7}
        className="hidden lg:block absolute right-0  w-[50vw] h-screen pointer-events-none object-contain"
      />
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: shouldAnimate ? 1 : 0, x: shouldAnimate ? 0 : -50 }}
        transition={{ duration: 0.3, delay: 3 }}
        className="flex flex-col  h-screen w-full lg:w-[50vw]  justify-center ">
        <h1 className="text-5xl  text-white md:text-8xl lg:text-[4rem] xl:text-7xl font-playfair z-10 lg:ml-16 text-center">
          Muhammad{" "}
          <span
            className="md:ml-8 relative md:text-[#010026] font-semibold z-20 md:before:content-brush
              before:absolute   before:-left-[60px] before:-top-[65px] lg:before:-top-[70px] before:z-[-1]">
            Ali
          </span>
        </h1>
        <p className="mt-10 mb-7 mx-3 lg:mx-6 text-white text-lg text-center lg:ml-16">
          {" "}
          I'm a front-end{" "}
          <span className="text-[#C45FB5] font-bold">Developer</span> with a
          passion for Unveiling Digital Dreams with Code & Creativity, weaving
          magic to bring digital dreams to life.
        </p>
        <div className="flex  items-center justify-center gap-5 lg:ml-16">
          <div className="btn ">
            <a href="#Projects">Projects</a>
          </div>
          <div className="btn ">
            <a href="#Contact-Me">ContactMe</a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Landing;
