import { setSelectedCategory } from "../../../features/category-filter";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";

interface CategoryItemProps {
  id: string;
  name: string;
  image: string;
}

export const CategoryItem = ({ id, image, name }: CategoryItemProps) => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.categoryFilter.selectedCategory,
  );

  return (
    <div className="border border-[#e5e7eb] dark:border-indigo-700 bg-white dark:bg-indigo-800 hover:bg-gray-50 dark:hover:bg-indigo-700 relative overflow-hidden active:scale-95 duration-75 cursor-pointer px-1.25 sm:px-2.5 py-1.25 rounded-md shadow-sm">
      <button
        onClick={() => dispatch(setSelectedCategory(id))}
        type="button"
        className="flex justify-center items-center gap-1 w-full cursor-pointer"
      >
        <div>
          <img
            src={image}
            alt={name}
            className="max-h-5 sm:max-h-6.25 sm:min-h-6.25 sm:min-w-6.25 object-contain"
          />
        </div>

        <p className="font-semibold text-[12px] sm:text-[14px] dark:text-white">
          {name}
        </p>

        {/* Line to show it is active category */}
        <div className={`absolute h-0.75 left-0 right-0 duration-100 bottom-0 ${selectedCategory === id ? "bg-indigo-600 dark:bg-indigo-400" : "bg-slate-100 dark:bg-indigo-800"}`}></div>
      </button>
    </div>
  );
};
