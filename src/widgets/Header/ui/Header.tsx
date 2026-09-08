import { BiCartAlt } from "react-icons/bi"; 
import { FiHeart } from "react-icons/fi";  
import { Link } from "react-router-dom";
import { motion } from 'motion/react';
import Logo from '/logo.jpg'
import { ThemeToggle } from "../../../features/theme-toggle";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { SearchAutoComplete } from "../../../features/search-autocomplete";
import { openLoginModal } from "../../../entities/modal";

export const Header = () => {
  const favoriteCount = useAppSelector((state) => state.favorite.ids.length);
  const cartCount = useAppSelector((state) => state.cart.items.length);
  const dispatch = useAppDispatch();

  const openModal = () => dispatch(openLoginModal());

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
        <SearchAutoComplete />
        
        <Link to="/favorites" className="flex dark:text-white group text-[22px] relative justify-center items-center gap-1.25">
          <FiHeart />
          <span className={`text-[12px] text-white absolute -top-2.5 pt-0.5 -right-2.5 flex justify-center items-center w-5 h-5 font-semibold bg-indigo-600 rounded-full pointer-events-none transition-all duration-300 ${favoriteCount === 0 ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}>
            {favoriteCount}
          </span>
        </Link>

        <Link to="/basket" className="flex group justify-center items-center gap-1.75">
          <div className="flex text-[22px] dark:text-white relative justify-center items-center gap-1.25">
            <BiCartAlt />
            <span className={`text-[12px] text-white absolute -top-2.5 pt-0.5 -right-2.5 font-semibold flex justify-center items-center w-5 h-5 bg-indigo-600 rounded-full pointer-events-none transition-all duration-300 ${cartCount === 0 ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}>
              {cartCount}
            </span>
          </div>
        </Link>

        <ThemeToggle />

        <div>
          <button onClick={openModal} type="button" className="btn btn-primary flex justify-center items-center">
            <span className="px-2.5">Login</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
};
