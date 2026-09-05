import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'motion/react';
import { GoProductsPageButton } from '../../../shared/ui/GoProductsPage';
import { calculatedOldPrice } from '../../../entities/product';
import { useAppSelector } from '../../../shared/lib/hooks';
import { CartItem } from '../../../entities/cart';
import { RevealOnScroll } from '../../../shared/ui/RevealOnScroll';
import { calculateCartTotal } from '../../../entities/cart/lib/calculateCartTotal';
import { formatPrice } from '../../../shared/lib/utils';

export const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartTotal = calculateCartTotal(cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="w-full min-h-[calc(100vh-77px)] text-center flex items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DotLottieReact
              src={"/add-to-cart.lottie"}
              loop
              autoplay
              className="w-90"
            />
          </motion.div>

          <motion.p
            className="text-[clamp(0.9rem,1vw,1rem)] text-gray-700 mb-2.5 dark:text-gray-300"
            initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your favorite products are not available.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <GoProductsPageButton />
          </motion.div>
        </div>
      ) : (
        <div className='flex gap-2.5 items-start flex-col md:flex-row p-1.75'>
          <div className='md:flex-2 w-full flex flex-col gap-2.5'>
            {cartItems.map((item) => (
              <RevealOnScroll key={item.id}>
                <CartItem
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              </RevealOnScroll>
            ))}
          </div>

          {/* Order summary */}
          <motion.div
            className='md:flex-1 bg-indigo-50 md:bg-white dark:bg-indigo-950 shadow-[0_-2px_5px_1px_rgb(0,0,0,0.07)] md:shadow-sm border border-[#e5e7eb] md:rounded-md rounded-sm p-1.75 text-gray-800 dark:text-white bottom-0 sticky w-full md:top-1.75'
            initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div>
              <h2 className="font-semibold">Order summary</h2>
              <hr className='my-1.25 border-[#e5e7eb]' />
              <div className='flex flex-col gap-1'>
                <div className="flex justify-between item-center text-[14px]">
                  <p className='font-medium'>Products:</p>
                  <p className='flex justify-start gap-1 font-semibold'>
                    {cartItems.length}
                  </p>
                </div>

                <div className="flex justify-between item-center text-[14px]">
                  <p className='font-medium'>The discount:</p>
                  <div className='flex justify-start gap-1'>
                    <span className='line-through text-gray-600 font-medium'>
                      $ {formatPrice(calculatedOldPrice(cartTotal))}
                    </span>
                    <span className='px-1.25 bg-indigo-100 dark:bg-indigo-400 font-medium rounded-sm'>
                      -10%
                    </span>
                  </div>
                </div>

                <div className='font-medium flex justify-between items-center'>
                  <span>All total price:</span>
                  <span className='font-semibold'>
                    $ {formatPrice(cartTotal)}
                  </span>
                </div>
              </div>

              <hr className='my-1.25 border-[#e5e7eb]' />
              <button
                type="button"
                className='px-2.5 w-full text-[14px] cursor-pointer py-1.75 rounded-[5px] duration-100 bg-linear-to-r from-violet-600 to-indigo-600 hover:bg-indigo-600 active:scale-95 text-white font-medium'
              >
                CHECKOUT
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
