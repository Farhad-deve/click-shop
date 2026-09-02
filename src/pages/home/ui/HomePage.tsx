import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Link } from "react-router-dom";
import { motion } from 'motion/react';

export const HomePage = () => {
  return (
    <>
      <div className="p-1.75 relative min-h-[calc(100vh-79px)] overflow-hidden max-w-[2000px] mx-auto flex justify-center items-center flex-col gap-3">
        <div className="flex relative z-1 flex-col justify-center items-center gap-3">
          <motion.h1
            className="text-[30px] md:text-[40px] lg:text-[45px] font-bold leading-9 md:leading-12.5 lg:leading-13.75 text-center mx-[5%] text-indigo-700 dark:text-indigo-400 drop-shadow-md max-w-250"
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            Find life-easing technologies only at Click Shop!
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-300 font-medium text-center max-w-175 mx-[5%] text-[12px] md:text-[14px]"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We have the latest smartphones, modern laptops, computers, and various
            accessories. Only with us you can buy quality technology at affordable
            prices!
          </motion.p>
          <Link to="/products">
            <motion.button
              className="pl-5 pr-3.75 text-[16px] py-1.75 flex justify-center items-center gap-1 hover:shadow-lg rounded-full duration-100 bg-linear-to-r from-violet-600 to-indigo-600 hover:bg-indigo-600 active:scale-95 text-white font-medium"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span>Get Started</span>
              <span className="text-[20px] flex justify-center items-center">
                <AiOutlineArrowRight className="move-right size-4" />
              </span>
            </motion.button>
          </Link>
        </div>

        <motion.div
          className="w-62.5 h-62.5 left-[10%] top-[20%] bg-purple-500 bg-opacity-30 rounded-full blur-[200px] absolute"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        ></motion.div>
        <motion.div
          className="w-75 h-75 top-[50%] right-[10%] bg-indigo-500 bg-opacity-30 rounded-full blur-[200px] absolute"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </>
  );
};
