import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { addToCart } from "../../../entities/cart";
import type { MouseEvent } from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export const AddToCartButton = ({ id, name, image, price } : Product) => {
  const dispatch = useAppDispatch();
  const isInCart = useAppSelector((state) => state.cart.items.find((item) => item.id === id));

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart({ id, name, image, price }));
  };

  return (
    <>
      <div className="relative active:scale-95 duration-100">
        <button
          onClick={handleClick}
          type="button"
          aria-label="Add to Cart"
          className="w-9.5 h-9.5 flex justify-center items-center rounded-lg text-[20px] shadow-sm bg-linear-to-r from-blue-600 to-indigo-500 hover:bg-linear-to-r hover:from-blue-500 hover:to-indigo-600 text-white active:shadow-none active:bg-linear-to-r active:from-blue-600 active:to-indigo-700"
        >
          <MdOutlineAddShoppingCart />
        </button>

        <span className={`text-[12px] absolute -top-1.25 pt-px -right-1.75 font-semibold flex justify-center items-center w-5 h-5 bg-orange-500 rounded-full text-white ${isInCart ? "opacity-100 translate-0" : "opacity-0 translate-y-1"}`}>
          {isInCart && isInCart.quantity}
        </span>
      </div>  
    </>
  );
};
