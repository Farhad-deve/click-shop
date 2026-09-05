import { BiX } from "react-icons/bi";
import { formatPrice } from "../../../shared/lib/utils";
import { calculatedOldPrice } from "../../product";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../shared/lib/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../model/cartSlice";

interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export const CartItem = (cartItem: CartItemProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const removeItem = () => dispatch(removeFromCart(cartItem.id));
  const increment = () => dispatch(incrementQuantity(cartItem.id));
  const decrement = () => dispatch(decrementQuantity(cartItem.id));

  return (
    <div className="flex relative justify-between items-center gap-1 border border-[#e5e7eb] dark:bg-indigo-950 rounded-md shadow-sm p-2.5 text-gray-700">
      <button
        type="button"
        className="absolute top-2 right-2 dark:text-white hover:bg-gray-300 dark:hover:bg-indigo-600 active:scale-95 bg-gray-100 dark:bg-gray-500 w-6.25 h-6.25 rounded-sm transition-all duration-200 flex justify-center items-center"
        onClick={removeItem}
      >
        <BiX />
      </button>

      <div>
        <img
          src={cartItem.image}
          alt={cartItem.name}
          className="max-h-25 min-h-25 max-w-25 rounded-sm object-contain"
        />
      </div>

      <div className="flex-1">
        <h2
          onClick={() => navigate(`/products/${cartItem.id}`)}
          className="cursor-pointer text-[14px] md:text-[16px] font-semibold transition-all duration-300 dark:text-white hover:text-indigo-700"
        >
          {cartItem.name}
        </h2>
        <p className="line-through text-gray-600 dark:text-gray-400 font-medium">
          $ {calculatedOldPrice(cartItem.price)}
        </p>
        <div className="flex justify-between items-center">
          <p className="font-medium text-[14px] dark:text-gray-300">
            <span>price:</span>{" "}
            <span className="font-semibold">
              ${formatPrice(cartItem.price)}
            </span>
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col-reverse sm:flex-row justify-between items-end pt-5 sm:pt-0 sm:items-center pl-1">
        <div className="border border-[#e5e7eb] dark:border-indigo-300 p-0.5 font-semibold flex justify-between gap-1 items-center rounded-full">
          <button
            type="button"
            className="min-w-5 sm:min-w-7.5 h-6.25 rounded-l-full rounded-r-sm flex justify-center items-center transition-all duration-200 dark:text-white hover:bg-gray-100 dark:hover:bg-indigo-500 active:scale-95"
            onClick={decrement}
          >
            -
          </button>

          <span className="w-6.25 flex justify-center items-center dark:text-white">
            {cartItem.quantity}
          </span>

          <button
            type="button"
            className="min-w-5 sm:min-w-7.5 h-6.25 rounded-r-full rounded-l-sm flex justify-center items-center transition-all duration-200 dark:text-white hover:bg-gray-100 dark:hover:bg-indigo-500 active:scale-95"
            onClick={increment}
          >
            +
          </button>
        </div>

        <div className="flex justify-center text-[14px] items-center font-medium flex-col">
          <span className="dark:text-white">Total price:</span>
          <span className="font-semibold dark:text-gray-400">
            ${formatPrice(cartItem.price * cartItem.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
};
