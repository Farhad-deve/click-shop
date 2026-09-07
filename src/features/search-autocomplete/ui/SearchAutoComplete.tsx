import { useState, type KeyboardEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { useGetCategoriesQuery } from "../../../entities/category";

export const SearchAutoComplete = () => {
  const { data: categories } = useGetCategoriesQuery();
  const [value, setValue] = useState("");

  // Function that returns suggested category, when user starts typing category name
  const suggestion = (): string | null => {
    if (!value) return null;
    if (!categories) return null;
    const suggestedCategory = categories.find((category) =>
      category.name.toLowerCase().startsWith(value.toLowerCase()),
    );
    const result = suggestedCategory ? suggestedCategory.name : null;
    return result;
  };

  // Function accepts suggestion when user clicks "TAB"
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
        e.preventDefault();
        const current = suggestion();
        if (current) setValue(current);
    }
  };

  return (
    <>
      <div className="hidden sm:block">
        <div className="relative border-2 rounded-full overflow-hidden border-indigo-600">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            value={value}
            className="px-4.5 py-1.25 pr-10 font-medium outline-none text-[14px] dark:placeholder:text-indigo-300 dark:text-indigo-200"
          />
          <span className="absolute left-4.5 top-[51%] font-medium text-[14px] -translate-y-1/2 text-gray-900/25 dark:text-indigo-600 pointer-events-none">
            {suggestion()}
          </span>
          <button className="absolute top-0.5 right-0.5 bottom-0.5 rounded-full dark:text-white hover:bg-indigo-50 dark:hover:bg-indigo-500 active:scale-95 cursor-pointer w-7.5 flex justify-center items-center">
            <FiSearch />
          </button>
        </div>
      </div>
    </>
  );
};
