import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import github from "../Assests/svg/github.svg";
import twitter from "../Assests/svg/twitter.svg";
import linkedin from "../Assests/svg/linkedin.svg";
import insta from "../Assests/svg/instagram.svg";
import Base from "../Assests/Base.svg";
import Screen from "../Assests/Screen.svg";
import Carousel from "./Carousel";

const SecondNav = ({ handleNavigation }) => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3, // Stagger delay between children
      },
    },
    exit: {},
  };
  const container2 = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1, // Stagger delay between children
      },
    },
    exit: {},
  };

  const navAnimation = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.2,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
    },
  };

  const itemVariants = {
    initial: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: (item) => ({
      x: "-100vw",
      transition: {
        duration: 0.5,
        delay: item.delay, // Use item.delay as the delay value for exit transition, defaulting to 0 if undefined
      },
    }),
  };

  const itemVariants1 = {
    initial: {
      x: "100vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: (item) => ({
      x: "100vw",
      transition: {
        duration: 0.5,
        delay: item.delay || 0, // Use item.delay as the delay value for exit transition, defaulting to 0 if undefined
      },
    }),
  };
  const customDelays = [0.2, 0.4, 0.6];

  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Projects" },
    { id: 3, name: "About-Me" },
    { id: 4, name: "Contact-Me" },
  ];

  const navIcons = [
    { id: 1, name: "Github", icon: github },
    { id: 2, name: "Twitter", icon: twitter },
    { id: 3, name: "linkedin", icon: linkedin },
    { id: 4, name: "Instagram", icon: insta },
  ];
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
              className="w-full h-[17vh]  bg-[#311931] border-none "
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
              className="w-full h-[17vh]  bg-[#311931] border-none "
              key={index}
              variants={itemVariants1}
              custom={{ delay }}
            />
          ))}
        </motion.section>
      </section>
      <div className="flex flex-col-reverse lg:flex-row w-full h-full absolute top-0 left-0 justify-around ">
        <div className="flex flex-col relative top-[10em] lg:top-[7em] lg:right-[70px]">
          <motion.div
            className="flex flex-col pb-[5em] md:pt-[200px] lg:pt-0 "
            variants={navAnimation}
          >
            <h1 className="text-[2em] md:text-[3.5em] lg:text-[2em] text-[#06061C]  text-center font-semibold  md:tracking-widest pb-2 lg:pb-[30px]">
              Social Contacts
            </h1>
            <div className="flex relative left-[80px] md:left-[200px] lg:left-0 ">
              {navIcons.map((item) => (
                <img
                  src={item.icon}
                  key={item.id}
                  className="h-[30px] w-[30px] mr-[30px]   md:h-[80px] md:w-[80px] md:p-[20px]"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col pb-[5em] relative bottom-[50px]"
            variants={navAnimation}
          >
            <h1 className="text-[2em] md:text-[3.5em] lg:text-[2em] text-[#06061C]  text-center font-semibold  md:tracking-widest pb-2 lg:pb-[30px]">
              Social Contacts
            </h1>
            <div className="flex relative left-[80px] md:left-[200px] lg:left-0 ">
              {navIcons.map((item) => (
                <img
                  src={item.icon}
                  key={item.id}
                  className="h-[30px] w-[30px] mr-[30px] md:h-[80px] md:w-[80px] md:p-[20px]"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col h-[100px] relative bottom-[20px] lg:top-[5em]  lg:right-[3em]"
          variants={container2}
        >
          <motion.h1
            className="text-[#06061C]  text-[2.5em] md:text-[4em] lg:text-[2.5em] ml-[80px] md:ml-[3.5em] lg:ml:0 font-semibold pb-[20px] lg:pb-[40px] tracking-[0.2rem] md:tracking-[0.5rem]"
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
              className="text-[#06061C] text-[1.8em] md:text-[3em] lg:text-[2em] font-semibold mb-[40px] bg-transparent  p-0 cursor-pointer"
              variants={navAnimation}
              onClick={() => handleNavigation(item.name)}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SecondNav;
