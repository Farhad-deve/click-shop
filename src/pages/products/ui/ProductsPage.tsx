import { RxDashboard } from "react-icons/rx"; 


export const ProductsPage = () => {
  return (
    <>
      <div>
        <div className="sticky right-[10px] z-[1] left-[10px] top-[-2px] bg-white p-[7px] border-b-[1px] shadow-sm">
          <div className="flex justify-start items-center gap-1 max-w-[1400px] mx-auto">
            {/* All products button category */}
            <div className="border-[1px] bg-white relative overflow-hidden min-w-max hover:bg-gray-50 active:scale-95 duration-75 cursor-pointer px-[15px] py-[5px] rounded-md shadow-sm flex justify-center items-center gap-1">
              <div className="">
                <RxDashboard />
              </div>

              <div className="font-semibold text-[12px] sm:text-[14px]">
                All
                <span className="hidden md:inline">Products</span>
              </div>

              {/* Line to show it is active category */}
              <div className="absolute h-[3px] left-0 right-0 duration-75 bottom-0 bg-indigo-600"></div>

              {/* <div className="absolute h-[3px] left-0 right-0 duration-75 bottom-0 bg-indigo-600"></div> */}
            </div>





          </div>
        </div>

        <div></div>
      </div>
    </>
  )
}

