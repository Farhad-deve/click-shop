import { MdOutlineAddShoppingCart } from "react-icons/md"; 
import { BiHeart } from "react-icons/bi"; 
import type { Product } from "../model/types";
import { calculatedOldPrice, DEFAULT_DISCOUNT_PERCENT } from "../lib/calculatedOldPrice";
import { StarRating } from "../../../shared/ui/StarRating";
import { formatPrice } from '../../../shared/lib/utils'

interface ProductCardProps {
  product: Product;
  categoryName: string;
}

export const ProductCard = ({ product, categoryName }: ProductCardProps) => {

  const oldPrice = calculatedOldPrice(product.price);

  return (
    <>
      <div className="border border-[#e5e7eb] cursor-pointer group hover:border-indigo-100 h-full duration-100 flex flex-col rounded-md overflow-hidden shadow-sm bg-white relative text-gray-700">
        <button type="button" aria-label="Add to favorites" className="w-8.75 h-8.75 flex justify-center items-center bg-black/20 text-[18px] duration-150 text-white hover:scale-105 border border-gray-200 hover:bg-opacity-15 rounded-full absolute top-1.75 right-1.75 active:scale-100">
          <BiHeart />
        </button>

        <div className="absolute text-[12px] font-medium bg-black/40 shadow-sm backdrop-blur-[1px] text-white top-2.5 left-2.5 py-0.5 px-1.25 rounded-sm">
          {categoryName}
        </div>

        <div className="flex justify-center items-center p-2.5 border-b border-[#e5e7eb]">
          <img loading="lazy" src={product.image} alt={product.name} className="max-h-42.5 min-h-42.5 sm:max-h-50 sm:min-h-50 object-contain" />
        </div>

        <div className="px-2.5 py-1.75 flex flex-col gap-2 justify-between flex-1 bg-slate-50 group-hover:bg-indigo-50 duration-100">
          <h2 className="text-[14px] md:text-[16px] font-semibold">{product.name}</h2>          

          <div className="flex justify-start items-center text-[12px] font-medium gap-1">
            <span>{product.rate}</span>

            <StarRating rating={product.rate} />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between items-start">
              <div className="text-[12px] flex items-center gap-1">
                <span className="line-through font-medium text-gray-500">$ {formatPrice(oldPrice)}</span>
                <span className="bg-indigo-200 inline-block px-0.5 rounded-sm">-{DEFAULT_DISCOUNT_PERCENT}%</span>
              </div>

              <div className="text-[16px] font-bold text-indigo-600">
                <span>$ {formatPrice(product.price)}</span>
              </div>
            </div>

            <div className="relative active:scale-95 duration-100">
              <button type="button" aria-label="Add to Cart" className="w-9.5 h-9.5 flex justify-center items-center rounded-lg text-[20px] shadow-sm bg-linear-to-r from-blue-600 to-indigo-500 hover:bg-linear-to-r hover:from-blue-500 hover:to-indigo-600 text-white active:shadow-none active:bg-linear-to-r active:from-blue-600 active:to-indigo-700">
                <MdOutlineAddShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
