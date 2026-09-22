import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const BackBtn = () => {
const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Back"
      type="button"
      className="px-2.5 py-1.25 font-medium text-[14px] cursor-pointer bg-slate-100 dark:bg-indigo-400 dark:text-white rounded-sm text-slate-700 active:scale-95 hover:bg-slate-200 dark:hover:bg-indigo-600 flex justify-center items-center gap-1"
    >
      <div>
        <BiArrowBack />
      </div>
      <div>Back</div>
    </button>
  );
};
