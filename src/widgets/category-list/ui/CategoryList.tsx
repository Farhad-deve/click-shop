import { BiChevronRight } from "react-icons/bi";
import { CiGrid41 } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetCategoriesQuery } from "../../../entities/category";
import { Navigation } from "swiper/modules";
import { Loader } from "../../../shared/ui/Loader";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { setSelectedCategory } from "../../../features/category-filter";
import { motion } from "motion/react";

export const CategoryList = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.categoryFilter.selectedCategory,
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="sticky right-2.5 z-1 left-2.5 -top-0.5 bg-white dark:bg-indigo-900 p-1.75 border-b border-[#e5e7eb] dark:border-indigo-800 shadow-sm">
        <motion.div
          className="flex justify-start items-center gap-1 max-w-350 mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* All products button category */}
          <button
            onClick={() => dispatch(setSelectedCategory("all"))}
            type="button"
            className="border border-[#e5e7eb] dark:border-indigo-700 bg-white dark:bg-indigo-800 relative overflow-hidden min-w-max hover:bg-gray-50 dark:hover:bg-indigo-700 active:scale-95 duration-75 cursor-pointer px-3.75 py-1.25 rounded-md shadow-sm flex justify-center items-center gap-1"
          >
            <div className="min-h-5 sm:min-h-6.25 flex  justify-center items-center dark:text-white">
              <CiGrid41 />
            </div>

            <div className="font-semibold text-[12px] sm:text-[14px] dark:text-white">
              All
              <span className="hidden md:inline"> Products</span>
            </div>

            {/* Line to show it is active category */}
            <div
              className={`absolute h-0.75 left-0 right-0 duration-75 bottom-0 ${selectedCategory === "all" ? "bg-indigo-600 dark:bg-indigo-400" : "bg-slate-100 dark:bg-indigo-800"}`}
            ></div>
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".swiper-button-next" }}
            slidesPerView={"auto"}
            spaceBetween={5}
          >
            {categories?.map((cat) => (
              <SwiperSlide
                className="min-w-max w-40! sm:w-45.75! lg:w-50!"
                key={cat.id}
              >
                <div className="border border-[#e5e7eb] dark:border-indigo-700 bg-white dark:bg-indigo-800 hover:bg-gray-50 dark:hover:bg-indigo-700 relative overflow-hidden active:scale-95 duration-75 cursor-pointer px-1.25 sm:px-2.5 py-1.25 rounded-md shadow-sm">
                  <button
                    onClick={() => dispatch(setSelectedCategory(cat.id))}
                    type="button"
                    className="flex justify-center items-center gap-1 w-full"
                  >
                    <div>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="max-h-5 sm:max-h-6.25 sm:min-h-6.25 sm:min-w-6.25 object-contain"
                      />
                    </div>

                    <p className="font-semibold text-[12px] sm:text-[14px] dark:text-white">
                      {cat.name}
                    </p>

                    {/* Line to show it is active category */}
                    <div
                      className={`absolute h-0.75 left-0 right-0 duration-100 bottom-0 ${selectedCategory === cat.id ? "bg-indigo-600 dark:bg-indigo-400" : "bg-slate-100 dark:bg-indigo-800"}`}
                    ></div>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hover:bg-indigo-200 dark:hover:bg-indigo-400 rounded-sm duration-150">
            <button
              type="button"
              aria-label="Next"
              className="swiper-button-next active:scale-95 hover:scale-110 duration-150"
            >
              <BiChevronRight className="dark:text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};
