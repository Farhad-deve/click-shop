import { BiTrash } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import { useGetCategoriesQuery } from "../../../entities/category";
import { RevealOnScroll } from "../../../shared/ui/RevealOnScroll";

export const AdminCategoriesPage = () => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <>
      <div className="text-gray-700 p-1.75">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-1.25">
          {categories?.map((category) => (
            <RevealOnScroll key={category.id}>
              <div
                className="
                border p-1.25 rounded-sm border-indigo-200 dark:border-indigo-600 shadow-sm bg-linear-to-r dark:from-indigo-900 dark:to-blue-900 from-indigo-100 to-blue-100
                "
              >
                <div className="flex justify-start gap-1.25 h-full">
                  <div className="border rounded-md min-w-28.75 min-h-28.75 flex justify-center border-indigo-100 items-center bg-white">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="max-h-25 max-w-28.75 p-1.25"
                    />
                  </div>

                  <div className="text-[14px] font-semibold flex flex-col justify-between gap-1.25 flex-1">
                    <h3 className="dark:text-white">{category.name}</h3>
                    <p className="text-[12px] text-slate-500 dark:text-gray-400 break-all bg-linear-to-r dark:from-indigo-800 dark:to-blue-800 from-indigo-50 to-blue-50 border-indigo-100 dark:border-indigo-900 font-medium max-h-15 min-h-15 p-0.75 border rounded-sm overflow-y-auto">
                      {category.description}
                    </p>
                    <div className="flex justify-end gap-1.25">
                      <button
                        type="button"
                        className="cursor-pointer text-[12px] font-semibold flex justify-center  gap-1 items-center px-2.5 py-0.75 rounded-sm border border-blue-500 bg-blue-500 hover:bg-blue-600 hover:shadow-sm duration-75 active:scale-95 text-white"
                      >
                        <div className="flex justify-center items-center text-[14px]">
                          <BiEditAlt />
                        </div>
                        <p>Update</p>
                      </button>

                      <button
                        type="button"
                        
                        className="cursor-pointer text-[12px] font-semibold flex justify-center  gap-1 items-center px-2.5 py-0.75 rounded-sm border border-red-500 bg-red-500 hover:bg-red-600 hover:shadow-sm duration-75 active:scale-95 text-white"
                      >
                        <div className="flex justify-center items-center text-[14px]">
                          <BiTrash />
                        </div>
                        <p>Delete</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  );
};
