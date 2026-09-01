import { BiCartAlt } from "react-icons/bi"; 
import { FiSearch, FiHeart } from "react-icons/fi";  
import { Link } from "react-router-dom";
import Logo from '/logo.jpg'

export const Header = () => {
  return (
    <header className="bg-white border border-[#e5e7eb] rounded-lg max-h-15 min-h-15 flex justify-between items-center gap-1 p-3.75 shadow-sm">
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="Click Shop" className="h-7.5 sm:h-8.75 object-contain active:scale-95 duration-100" />
        </Link>
      </div>

      <nav className="flex justify-end items-center gap-3.75">
        <div className="hidden sm:block">
          <div className="relative border-2 rounded-full overflow-hidden border-indigo-600">
            <input type="text" name="search" placeholder="Search" id="" className="px-4.5 py-1.25 pr-10 font-medium outline-none text-[14px]" />
            <div className="absolute top-0.5 right-0.5 bottom-0.5 rounded-full hover:bg-indigo-50 active:scale-95 cursor-pointer w-7.5 flex justify-center items-center">
              <FiSearch />
            </div>
          </div>
        </div>
        
        <Link to="/favorites" className="flex cursor-pointer group text-[22px] relative justify-center items-center gap-1.25">
          <FiHeart />
          <span className="text-[12px] absolute -top-2.5 pt-0.5 -right-2.5 font-semibold flex justify-center items-center w-5 h-5 bg-indigo-600 rounded-full text-white">
            0
          </span>
        </Link>

        <Link to="/basket" className="flex cursor-pointer group justify-center items-center gap-1.75">
          <div className="flex text-[22px] relative justify-center items-center gap-1.25">
            <BiCartAlt />
            <span className="text-[12px] absolute -top-2.5 pt-0.5 -right-2.5 font-semibold flex justify-center items-center w-5 h-5 bg-indigo-600 rounded-full text-white">
              0
            </span>
          </div>
          <span className="text-[14px] font-semibold group-hover:text-indigo-600">
            $0.00
          </span>
        </Link>

        <div>
          <button type="button" className="btn btn-primary flex justify-center items-center">
            <span className="px-2.5">Login</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
