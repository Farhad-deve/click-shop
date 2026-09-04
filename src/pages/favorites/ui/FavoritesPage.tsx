import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ProductCard, useGetProductsQuery } from "../../../entities/product";
import { useAppSelector } from "../../../shared/lib/hooks";
import { ProductGrid } from "../../../widgets/product-grid";
import { useGetCategoriesQuery } from "../../../entities/category";
import { RevealOnScroll } from "../../../shared/ui/RevealOnScroll";
import { Loader } from "../../../shared/ui/Loader";

export const FavoritesPage = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const favoriteIds = useAppSelector((state) => state.favorite.ids);

  if (isLoading) return <Loader />;

  const getCategoryName = (categoryId: string) =>
    categories?.find((c) => c.id === categoryId)?.name ?? "Uncategorized";

  const filteredFavoriteProducts = products?.filter((product) =>
    favoriteIds.includes(product.id),
  );

  return (
    <>
      {favoriteIds.length === 0 ? (
        <div className="w-full min-h-[calc(100vh-77px)] text-center flex items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DotLottieReact
              src={"/empty-list.lottie"}
              loop
              autoplay
              className="w-120"
            />

            {/* Heart animation is here */}
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
            <Link
              to={"/products"}
              className="flex justify-center items-center gap-1 px-2.5 py-1.25 bg-slate-100 dark:bg-indigo-400 hover:bg-slate-200 dark:hover:bg-indigo-600 active:bg-slate-300 rounded-md transition-all text-[14px] dark:text-white font-medium"
            >
              <BiArrowBack />
              Products
            </Link>
          </motion.div>
        </div>
      ) : (
        <ProductGrid>
          {filteredFavoriteProducts?.map((product) => (
            <RevealOnScroll key={product.id}>
              <ProductCard
                product={product}
                categoryName={getCategoryName(product.categoryId)}
              />
            </RevealOnScroll>
          ))}
        </ProductGrid>
      )}
    </>
  );
};
