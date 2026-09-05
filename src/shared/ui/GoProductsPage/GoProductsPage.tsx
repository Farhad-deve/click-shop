import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export const GoProductsPageButton = () => {
  return (
    <Link
      to={"/products"}
      className="flex justify-center items-center gap-1 px-2.5 py-1.25 bg-slate-100 dark:bg-indigo-400 hover:bg-slate-200 dark:hover:bg-indigo-600 active:bg-slate-300 rounded-md transition-all text-[14px] dark:text-white font-medium"
    >
      <BiArrowBack />
      Products
    </Link>
  );
};
