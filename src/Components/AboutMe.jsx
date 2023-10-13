import { motion } from "framer-motion";

function AboutMe({ shouldAnimate, finalY }) {
  return (
    <motion.div
      className="h-screen w-screen overflow-hidden "
      style={{
        position: "relative",
        zIndex: shouldAnimate ? 10 : 1,
      }}
      initial={{ y: 0 }}
      animate={{
        y: finalY,
      }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <motion.div className="blur" />
      <motion.section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldAnimate ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: shouldAnimate ? 3 : 0 }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[56vmin] h-[17vmin] bg-gradient-to-b from-purple-500 via-purple-500 to-pink-500  rounded-t-full rounded-b-full"
        />
        <div className="hidden lg:flex  w-full fixed items-center justify-between top-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldAnimate ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: shouldAnimate ? 3 : 0 }}
            className="w-[15vmin] h-[66vmin] bg-gradient-to-b from-purple-500 via-purple-500 to-pink-500  rounded-t-full rounded-b-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldAnimate ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: shouldAnimate ? 3 : 0 }}
            className=" lg:inline w-[15vmin] h-[56vmin] bg-gradient-to-b from-purple-500 via-purple-500 to-pink-500  rounded-t-full rounded-b-full"
          />
        </div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldAnimate ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: shouldAnimate ? 3 : 0 }}
          className="flex flex-col  z-[60]  w-full md:w-[80vw] lg:w-[50vw] h-[90vh] mt-[10vh] md:mt-[15vh]  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  "
        >
          <h1 className="text-3xl neon-text md:text-7xl lg:text-6xl z-[60]  text-white text-center mt-[20px] md:mt-0">
            Choosing to not choose is equally important too{""}
          </h1>

          <p className="mt-10 mb-7 mx-5 text-white text-base md:text-3xl lg:text-lg xl:text-xl 2xl:text-2xl">
            {" "}
            I am an enthusiastic web designer with a passion for aesthetics and
            a commitment to continuous growth. My journey in the world of web
            development has been driven by a desire to create visually stunning
            and user-friendly websites. With each project, I strive to push my
            creative boundaries, delivering top-notch services, and learning
            something new along the way. Join me on this exciting journey as I
            evolve and explore the endless possibilities of web design.
          </p>
        </motion.section>
      </motion.section>
    </motion.div>
  );
}

export default AboutMe;
