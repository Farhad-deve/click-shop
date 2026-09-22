import { HiOutlineUsers } from "react-icons/hi"; 
import { MdAddShoppingCart } from "react-icons/md"; 
import { MdOutlineDashboardCustomize } from "react-icons/md"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { RxDashboard } from "react-icons/rx"; 
import { BiChevronRight } from "react-icons/bi"
import type { IconType } from "react-icons/lib";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'motion/react';
import { useState } from "react";

interface NavDataType {
  id: number;
  name: string;
  path: string;
  icon: IconType
}

export const Sidebar = () => {
  const navData : NavDataType[] = [
    { id: 1, name: "Categories", path: "/admin/categories", icon: RxDashboard },
    { id: 2, name: "Products", path: "/admin/products", icon: AiOutlineShoppingCart},
    { id: 3, name: "Create category", path: "/admin/create-category", icon: MdOutlineDashboardCustomize},
    { id: 4, name: "Create product", path: "/admin/create-product", icon: MdAddShoppingCart},
    { id: 5, name: "Users", path: "/admin/users", icon: HiOutlineUsers}
  ]
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <aside className={`absolute ${isSidebarOpen ? "left-0" : "-left-56"} duration-300 w-55 border border-[#e5e7eb] dark:border-indigo-900 shadow-sm rounded-md p-2.5 top-1.25 bottom-0 z-20 bg-white dark:bg-indigo-950 md:relative md:top-1.25 md:bottom-0 md:mb-1.25 md:left-0`}>
        <div>
          <div className="flex justify-center items-center font-bold text-indigo-700 dark:text-white gap-1">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
            >
              Dashboard
            </motion.h2>
          </div>

          <motion.hr 
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="my-1.25 border-[#e5e7eb] dark:border-indigo-600"
          />

          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)"}}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)"}}
            transition={{ duration: 0.5 }} 
          >
            {navData.map((item) => (
              <Link key={item.id} to={item.path}>
                <button type="button" className={`${location.pathname === item.path ? "bg-indigo-500 border-indigo-600 text-white hover:bg-indigo-600" : "bg-white dark:bg-indigo-900 text-gray-700 dark:text-white"} hover:bg-indigo-100 dark:hover:bg-indigo-700 hover:border-indigo-200 dark:hover:border-indigo-600 duration-200 py-1.25 px-3.75 border border-[#e5e7eb] dark:border-indigo-700 cursor-pointer active:scale-95 rounded-sm shadow-sm w-full flex justify-start font-semibold items-center gap-1 text-[14px]`}>
                  {<item.icon size={16} />}
                  {item.name}
                </button>
              </Link>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          aria-label="Toggle sidebar"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="h-10 w-6.25 bg-indigo-500 text-white rounded-sm text-[20px] flex md:hidden justify-center items-center hover:bg-indigo-600 bg-opacity-50 active:scale-95 absolute top-[50%] translate-y-[-50%] -right-7.5"
        >
          <div className={`${isSidebarOpen ? "rotate-180" : "rotate-0"} duration-300`}>
            <BiChevronRight />
          </div>
        </button>
      </aside>
    </>
  )
}

