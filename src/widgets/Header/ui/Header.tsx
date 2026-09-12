import { FiLogIn } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { BiCartAlt } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Logo from "/logo.jpg";
import { ThemeToggle } from "../../../features/theme-toggle";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { SearchAutoComplete } from "../../../features/search-autocomplete";
import { openLoginModal } from "../../../entities/modal";
import { logout, useAuthInit } from "../../../entities/user";
import { useState } from "react";

export const Header = () => {
  const { isLoading, token } = useAuthInit();
  const favoriteCount = useAppSelector((state) => state.favorite.ids.length);
  const cartCount = useAppSelector((state) => state.cart.items.length);

  const currentUser = useAppSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

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
          <img
            src={Logo}
            alt="Click Shop"
            className="h-7.5 sm:h-8.75 object-contain active:scale-95 duration-100"
          />
        </Link>
      </div>

      <nav className="flex justify-end items-center gap-1.5 md:gap-3.75">
        <SearchAutoComplete />

        <Link
          to="/favorites"
          className="flex dark:text-white group text-[22px] relative justify-center items-center gap-1.25"
        >
          <FiHeart />
          <span
            className={`text-[12px] text-white absolute -top-2.5 pt-0.5 -right-2.5 flex justify-center items-center w-5 h-5 font-semibold bg-indigo-600 rounded-full pointer-events-none transition-all duration-300 ${favoriteCount === 0 ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}
          >
            {favoriteCount}
          </span>
        </Link>

        <Link
          to="/basket"
          className="flex group justify-center items-center gap-1.75"
        >
          <div className="flex text-[22px] dark:text-white relative justify-center items-center gap-1.25">
            <BiCartAlt />
            <span
              className={`text-[12px] text-white absolute -top-2.5 pt-0.5 -right-2.5 font-semibold flex justify-center items-center w-5 h-5 bg-indigo-600 rounded-full pointer-events-none transition-all duration-300 ${cartCount === 0 ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}
            >
              {cartCount}
            </span>
          </div>
        </Link>

        <ThemeToggle />

        <div>
          {isLoading ? (
            <div className="btn btn-primary">
              <div className="border-[3px] w-4 h-4 rounded-full border-[#e5e7eb] animate-spin border-b-indigo-600"></div>
            </div>
          ) : token && currentUser ? (
            <div className="relative menu">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-primary cursor-pointer"
              >
                <div className="flex justify-center items-center gap-1">
                  <span className="text-[16px]">
                    <FaUserCircle />
                  </span>
                  <span>{currentUser.isAdmin ? "Admin" : "Profile"}</span>
                </div>
              </button>

              <div className={`absolute flex flex-col gap-1 bg-white p-1.75 text-gray-600 rounded-sm transition-all duration-300 border border-[#e5e7eb] top-10 shadow-md z-5 min-w-37.5 -right-3 ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"}`}>
                <button
                  type="button"
                  onClick={() => {
                    navigate('/profile');
                    setIsOpen(false);
                  }}
                  className="text-[14px] cursor-pointer font-medium flex p-1.25 rounded-sm hover:bg-slate-100 justify-start items-center gap-1 active:scale-95"
                >
                  <span>
                    <FaUserCircle />
                  </span>
                  <span className="text-nowrap">
                    {currentUser.userName}
                  </span>
                </button>

                {currentUser.isAdmin && (
                  <div>
                    <hr className="mb-0.75 border-[#e5e7eb]" />

                    <button
                      type="button"
                      onClick={() => {
                        navigate("/admin")
                        setIsOpen(false)
                      }}
                      className="flex justify-start cursor-pointer hover:bg-slate-100 p-1.25 rounded-sm items-center gap-1 text-blue-600 w-full hover:text-blue-700 active:scale-95"
                    >
                      <MdOutlineAdminPanelSettings />
                      <span className="text-[14px] font-medium">Dashboard</span>
                    </button>
                  </div>
                )}

                <hr className="border-[#e5e7eb]" />

                <button
                  type="button"
                  onClick={() => {
                    dispatch(logout());
                    setIsOpen(false);
                  }}
                  className="flex justify-start cursor-pointer hover:bg-slate-100 p-1.25 rounded-sm items-center gap-1 text-red-500 w-full hover:text-red-600 active:scale-95<FiLogIn />"
                >
                  <FiLogIn />
                  <span className="text-[14px] font-medium">Logout</span>
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={openModal}
              type="button"
              className="btn btn-primary cursor-pointer flex justify-center items-center"
            >
              <span className="px-2.5">Login</span>
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  );
};
