import { motion } from "framer-motion";

function NavBar({ shouldAnimate, ButtonClicked }) {
  return (
    <motion.nav className="fixed top-[-10] left-0 w-full bg-transparent z-[9999] m-0 p-0 ">
      <motion.div
        animate={{ opacity: ButtonClicked ? 0 : 1 }}
        transition={{ delay: 1.3 }}
        className="flex relative top-[-4px] justify-center items-center "
      >
        <div className="w-[530px]  lg:w-[530px] h-[6px] bg-gradient-to-l from-[#ff9900] via-[#ff9900] to-transparent relative top-[3px] md:left-[30px] right-[60px] lg:left-0 m-0 p-0" />
        <a className="fixed z-[120] top-0 ">
          <motion.div
            className="MenuBtn  w-[15rem] h-[2.5rem] lg:w-[15rem] lg:h-[3rem] flex"
            onClick={shouldAnimate}
          >
            <h1 className="text-[1.2em] text-black font-bold">Menu</h1>
          </motion.div>
        </a>

        <div className="w-[530px] h-[6px] bg-gradient-to-r from-[#ff9900] via-[#ff9900] to-transparent relative top-[3px] md:left-[-30px] left-[100px] m-0 p-0" />
      </motion.div>
    </motion.nav>
  );
}

export default NavBar;
