import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="p-1.75 relative min-h-[calc(100vh-79px)] overflow-hidden max-w-[2000px] mx-auto flex justify-center items-center flex-col gap-3">
        <div className="flex relative z-1 flex-col justify-center items-center gap-3">
          <h1 className="text-[30px] md:text-[40px] lg:text-[45px] font-bold leading-9 md:leading-12.5 lg:leading-13.75 text-center mx-[5%] text-indigo-700 drop-shadow-md max-w-250">
            Find life-easing technologies only at Click Shop!
          </h1>
          <p className="text-gray-600 font-medium text-center max-w-175 mx-[5%] text-[12px] md:text-[14px]">
            We have the latest smartphones, modern laptops, computers, and various
            accessories. Only with us you can buy quality technology at affordable
            prices!
          </p>
          <Link to="/products">
            <button className="pl-5 pr-3.75 text-[16px] py-1.75 flex justify-center items-center gap-1 hover:shadow-lg rounded-full duration-100 bg-linear-to-r from-violet-600 to-indigo-600 hover:bg-indigo-600 active:scale-95 text-white font-medium">
              <span>Get Started</span>
              <span className="text-[20px] flex justify-center items-center">
                <AiOutlineArrowRight className="move-right size-[1rem]" />
              </span>
            </button>
          </Link>
        </div>

        <div className="w-62.5 h-62.5 left-[10%] top-[20%] bg-purple-500 bg-opacity-30 rounded-full blur-[200px] absolute"></div>
        <div className="w-75 h-75 top-[50%] right-[10%] bg-indigo-500 bg-opacity-30 rounded-full blur-[200px] absolute"></div>
      </div>
    </>
  );
};
