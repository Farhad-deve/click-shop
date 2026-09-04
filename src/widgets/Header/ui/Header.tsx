import { BiCartAlt } from "react-icons/bi"; 
import { FiSearch, FiHeart } from "react-icons/fi";  
import { Link } from "react-router-dom";
import { motion } from 'motion/react';
import Logo from '/logo.jpg'
import { ThemeToggle } from "../../../features/theme-toggle";
import { useAppSelector } from "../../../shared/lib/hooks";

export const Header = () => {
  const favoriteCount = useAppSelector((state) => state.favorite.ids.length);

  return (
    <motion.header
      className="bg-white dark:bg-indigo-950 border border-[#e5e7eb] dark:border-indigo-950 rounded-lg max-h-15 min-h-15 flex justify-between items-center gap-1 p-2 sm:p-3.75 shadow-sm"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="Click Shop" className="h-7.5 sm:h-8.75 object-contain active:scale-95 duration-100" />
        </Link>
      </div>

      <nav className="flex justify-end items-center gap-1.5 md:gap-3.75">
        <div className="hidden sm:block">
          <div className="relative border-2 rounded-full overflow-hidden border-indigo-600">
            <input type="text" name="search" placeholder="Search" id="" className="px-4.5 py-1.25 pr-10 font-medium outline-none text-[14px] dark:placeholder:text-indigo-300 dark:text-indigo-200" />
            <div className="absolute top-0.5 right-0.5 bottom-0.5 rounded-full dark:text-white hover:bg-indigo-50 dark:hover:bg-indigo-500 active:scale-95 cursor-pointer w-7.5 flex justify-center items-center">
              <FiSearch />
            </div>
          </div>
        </div>
        
        <Link to="/favorites" className="flex dark:text-white group text-[22px] relative justify-center items-center gap-1.25">
          <FiHeart />
          <span className={`text-[12px] text-white absolute -top-2.5 pt-0.5 -right-2.5 flex justify-center items-center w-5 h-5 font-semibold bg-indigo-600 rounded-full pointer-events-none transition-all duration-300 ${favoriteCount === 0 ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}>
            {favoriteCount}
          </span>
        </Link>

        <Link to="/basket" className="flex group justify-center items-center gap-1.75">
          <div className="flex text-[22px] dark:text-white relative justify-center items-center gap-1.25">
            <BiCartAlt />
            <span className="text-[12px] absolute -top-2.5 pt-0.5 -right-2.5 font-semibold flex justify-center items-center w-5 h-5 bg-indigo-600 rounded-full text-white">
              0
            </span>
          </div>
          <span className="text-[14px] dark:text-white font-semibold group-hover:text-indigo-600">
            $0.00
          </span>
        </Link>

        <ThemeToggle />

        <div>
          <button type="button" className="btn btn-primary flex justify-center items-center">
            <span className="px-2.5">Login</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
};
