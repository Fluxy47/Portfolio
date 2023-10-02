import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  itemVariants1,
  customDelays,
  container2,
  navAnimation,
  navItems,
  navIcons,
  SkillIcons,
} from "../Utils/Constant";

const SecondNav = ({ handleNavigation }) => {
  return (
    <motion.div
      className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0  z-[999] "
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="flex flex-col h-[50vw] w-screen ">
        <motion.section
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {customDelays.map((delay, index) => (
            <motion.div
              className="w-full h-[17vh]   bg-[#720026] border-none "
              key={index}
              variants={itemVariants}
              custom={{ delay }} // Pass delay value as custom prop
            />
          ))}
        </motion.section>
        <motion.section
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {customDelays.map((delay, index) => (
            <motion.div
              className="w-full h-[17vh]  bg-[#720026] border-none "
              key={index}
              variants={itemVariants1}
              custom={{ delay }}
            />
          ))}
        </motion.section>
      </section>
      <section className="absolute top-0 left-0 flex flex-col lg:flex-row-reverse h-screen w-full justify-evenly lg:justify-around items-center ">
        <motion.div className="flex flex-col " variants={container2}>
          <motion.h1
            className="text-[#06061C] text-center text-[2.5em] md:text-[4em] lg:text-[2.5em]  font-semibold pb-[20px] lg:pb-[40px] tracking-[0.2rem] md:tracking-[0.5rem]  mx-6 "
            variants={navAnimation}
          >
            Navigation
          </motion.h1>
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              initial={{ letterSpacing: 0, opacity: 0 }}
              aniamte={{ opacity: 1 }}
              whileHover={{ letterSpacing: "0.1em" }}
              className="text-[#06061C] text-[1.8em] md:text-[3em] lg:text-[2em] font-semibold mb-[40px] bg-transparent  p-0 cursor-none "
              variants={navAnimation}
              onClick={() => handleNavigation(item.name)}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
        <section className=" flex flex-col  w-full lg:w-auto items-center">
          <motion.div
            className="flex flex-col items-center relative bottom-5 pb-[20px] "
            variants={navAnimation}
          >
            <h1 className="text-[2em] md:text-[3.5em] lg:text-[2em] text-[#06061C]  text-center font-semibold  md:tracking-widest ">
              Skills
            </h1>
            <div className="flex relative items-center  gap-9">
              {SkillIcons.map((item) => (
                <img
                  src={item.icon}
                  key={item.id}
                  className="h-[30px] w-[30px]  md:h-[80px] md:w-[80px] md:p-[20px]"
                />
              ))}
            </div>
          </motion.div>

          <motion.div className="flex flex-col " variants={navAnimation}>
            <h1 className="text-[2em] md:text-[3.5em] lg:text-[2em] text-[#06061C]  text-center font-semibold  md:tracking-widest pb-5">
              Social Contacts
            </h1>
            <div className="flex relative items-center justify-center ">
              {navIcons.map((item, idx) => (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.icon}
                    key={item.id}
                    className="h-[30px] w-[30px]    mr-[30px] md:h-[80px] md:w-[80px] md:p-[20px]"
                    alt="GitHub Icon"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </section>
    </motion.div>
  );
};

export default SecondNav;
