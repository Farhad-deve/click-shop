import { BiMoon, BiSun } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { toggleTheme } from "../../../entities/theme";

export const ThemeToggle = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(toggleTheme())}
        aria-label="Toggle theme"
        className="text-[22px] dark:text-white hover:bg-indigo-200 dark:hover:bg-indigo-600 transition-all duration-150 cursor-pointer p-0.5 md:p-1 rounded-md"
        title="Switch theme"
      >
        {theme === "dark" ? <BiSun /> : <BiMoon />}
      </button>
    </>
  );
};
