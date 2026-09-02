import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "../../../shared/lib/hooks";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="text-[22px] dark:text-white hover:bg-indigo-200 dark:hover:bg-indigo-600 transition-all duration-150 p-0.5 md:p-1 rounded-md"
        title="Switch theme"
      >
        {theme === "dark" ? <BiSun /> : <BiMoon />}
      </button>
    </>
  );
};
