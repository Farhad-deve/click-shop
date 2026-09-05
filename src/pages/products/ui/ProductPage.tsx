import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BiHeart, BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { formatPrice } from "../../../shared/lib/utils";
import { motion } from 'motion/react';
import { useGetProductByIdQuery } from "../../../entities/product";
import { useGetCategoriesQuery } from "../../../entities/category";
import { Loader } from "../../../shared/ui/Loader";
import { StarRating } from "../../../shared/ui/StarRating";
import { ImageZoom } from "../../../shared/ui/ImageZoom";
import { FavoriteButton } from "../../../features/add-to-favorite";
import { AddToCartButton } from "../../../features/add-to-cart";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { addToCart } from "../../../entities/cart";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  if (!id) return null;
  const { data: product, isLoading } = useGetProductByIdQuery(id);
  const { data: categories } = useGetCategoriesQuery();

  if (isLoading || !product) return <Loader />

  const dispatch = useAppDispatch();
  const isInCart = useAppSelector((state) => state.cart.items.find((item) => item.id === id));

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // dispatch(addToCart());
  };


  const categoryName = categories?.find((c) => c.id === product?.categoryId)?.name ?? "Uncategorized";

  return (
    <>
      <div className="p-2.5 text-gray-800 w-full lg:w-[95%] mx-auto max-w-350">
        <div className="flex flex-col md:flex-row gap-2.5">
          <div className="flex-1 relative">
            <div className="w-full h-full md:max-w-150 md:max-h-125 border border-[#e5e7eb] dark:border-[#4b5563] rounded-md p-1.25 shadow-sm overflow-hidden">
              <ImageZoom src={product.image} alt={product.name} />
            </div>
            <div className="px-2.5 py-1.25 absolute top-2.5 left-2.5 font-semibold text-[12px] bg-indigo-800/55 rounded-sm text-white flex justify-center items-center">
              {categoryName}
            </div>
          </div>

          <div className="flex-[1.5] p-2.5 flex flex-col gap-2.5 justify-between">
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center gap-2.5">
                <button onClick={() => navigate(-1)} type="button" className="px-2.5 py-1.25 font-medium text-[14px] bg-slate-100 dark:bg-indigo-400 dark:text-white rounded-sm text-slate-700 active:scale-95 hover:bg-slate-200 dark:hover:bg-indigo-600 flex justify-center items-center gap-1">
                  <div>
                    <BiArrowBack />
                  </div>
                  <div>
                    Back
                  </div>
                </button>

                <FavoriteButton productId={product.id} className="w-8.75 h-8.75 flex justify-center hover:bg-red-50 dark:hover:bg-red-300 items-center border border-red-400 active:scale-95 text-red-500 font-medium rounded-sm text-[20px]" />
              </div>
              <hr className="my-1.75 border-[#e5e7eb] dark:border-[#4b5563]" />
            </motion.div>

            <div className="flex flex-col gap-5 flex-1 py-5 lg:py-7 justify-center">
              <motion.h3
                className="font-semibold dark:text-white text-[clamp(1.4rem,1.5vw,2rem)]"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {product.name}
              </motion.h3>

              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h4 className="font-semibold text-[14px] dark:text-white">Description:</h4>
                <p className="text-[14px] lg:text-[16px] font-medium text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
              </motion.div>

              <motion.div
                className="flex justify-between items-center gap-1"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex gap-1 items-center">
                  <span className="font-medium dark:text-white">price:</span>
                  <span className="font-semibold text-[18px] text-indigo-600 dark:text-indigo-400">$ {formatPrice(product.price)}</span>
                </div>

                <div className="flex gap-1 items-center">
                  <span className="font-medium dark:text-white">{product.rate}</span>
                  <span className="text-orange-500">
                    <div className="flex space-x-1">
                      <StarRating rating={product.rate} />
                    </div>
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.hr initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="my-1.75 border-[#e5e7eb] dark:border-[#4b5563]" />

            <motion.div
              className="flex justify-between items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <button type="button" onClick={() => navigate(-1)} className="px-2.5 py-1.25 font-medium text-[14px] bg-slate-100 rounded-sm text-slate-700 active:scale-95 hover:bg-slate-200 flex justify-center items-center gap-1 md:hidden">
                <div>
                  <BiArrowBack />
                </div>

                <div>
                  Back
                </div>
              </button>

              <div className="flex justify-end gap-2.5 flex-1">
                <button type="button" className="w-8.75 h-8.75 flex md:hidden justify-center items-center border border-red-400 active:scale-95 text-red-500 font-medium rounded-sm text-[20px]">
                  <BiHeart />
                </button>
                <button
                  type="button"
                  
                  className="duration-100 px-2.5 relative py-1.25 flex justify-center items-center gap-1 bg-indigo-600 hover:bg-active:scaletext-white font-medium rounded-sm">
                  <span className="text-[18px]">
                    <MdOutlineAddShoppingCart />
                  </span>

                  <span>
                    Add to Cart
                  </span>

                  <span className="text-[12px] absolute -top-1.25 pt-px -right-1.75 font-semibold flex justify-center items-center w-5 h-5 bg-orange-500 rounded-full text-white">
                    1
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
};
