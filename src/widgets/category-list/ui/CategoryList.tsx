import { BiChevronRight } from "react-icons/bi"; 
import { CiGrid41 } from "react-icons/ci"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetCategoriesQuery } from "../../../entities/category";
import { Navigation } from "swiper/modules";

export const CategoryList = () => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <>
      <div className="sticky right-2.5 z-1 left-2.5 -top-0.5 bg-white p-1.75 border-b border-[#e5e7eb] shadow-sm">
        <div className="flex justify-start items-center gap-1 max-w-350 mx-auto">
          {/* All products button category */}
          <button type="button" className="border border-[#e5e7eb] bg-white relative overflow-hidden min-w-max hover:bg-gray-50 active:scale-95 duration-75 cursor-pointer px-3.75 py-1.25 rounded-md shadow-sm flex justify-center items-center gap-1">
            <div className="min-h-5 sm:min-h-6.25 flex justify-center items-center">
              <CiGrid41 />
            </div>

            <div className="font-semibold text-[12px] sm:text-[14px]">
              All
              <span className="hidden md:inline"> Products</span>
            </div>

            {/* Line to show it is active category */}
            <div className="absolute h-0.75 left-0 right-0 duration-75 bottom-0 bg-indigo-600"></div>

            {/* Inactive line */}
            {/* <div className="absolute h-0.75 left-0 right-0 duration-75 bottom-0 bg-slate-100"></div> */}
          </button>

          <Swiper modules={[Navigation]} navigation={{ nextEl: ".swiper-button-next" }} slidesPerView={"auto"} spaceBetween={5}>
            {categories?.map((cat) => (
              <SwiperSlide key={cat.id} className="min-w-max" style={{ marginRight: "5px" }}>
                <div className="border bg-white hover:bg-gray-50 relative overflow-hidden active:scale-95 duration-75 cursor-pointer px-[5px] sm:px-[10px] py-[5px] rounded-md shadow-sm">
                  <button type="button" className="flex justify-center items-center gap-1 w-full">
                    <div>
                      <img src={`${cat.image}`} alt={`${cat.name}`} className="max-h-[20px] sm:max-h-[25px] sm:min-h-[25px] sm:min-w-[25px] object-contain" />
                    </div>

                    <p className="font-semibold text-[12px] sm:text-[14px]">
                      {cat.name}
                    </p>

                    {/* Line to show it is active category */}
                    <div className="absolute h-0.75 left-0 right-0 duration-75 bottom-0 bg-indigo-600"></div>

                    {/* Inactive line */}
                    {/* <div className="absolute h-0.75 left-0 right-0 duration-75 bottom-0 bg-slate-100"></div> */}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" className="swiper-button-next cursor-pointer hover:scale-110 active:scale-95 size-4">
            <BiChevronRight className="size-4" />    
          </button>
        </div>
      </div>
    </>
  );
};
