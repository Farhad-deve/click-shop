import { BiArrowBack } from "react-icons/bi"; 
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useGetCategoriesQuery } from "../../../entities/category";
import { ProductCard, useGetProductsQuery } from "../../../entities/product";
import { useAppSelector } from "../../../shared/lib/hooks";
import { Loader } from "../../../shared/ui/Loader";
import { CategoryList } from "../../../widgets/CategoryList";
import { ProductGrid } from "../../../widgets/ProductGrid";
import { motion } from 'motion/react';
import { RevealOnScroll } from "../../../shared/ui/RevealOnScroll";
import { Link } from "react-router-dom";

export const AdminProductsPage = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  const selectedCategory = useAppSelector(
    (state) => state.categoryFilter.selectedCategory,
  );

  const getCategoryName = (categoryId: string) =>
    categories?.find((c) => c.id === categoryId)?.name ?? "Uncategorized";

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter((product) => product.categoryId === selectedCategory);

  if (isLoading) return <Loader />;

  return (
    <div>
      <CategoryList />

      <div>
        {filteredProducts?.length === 0 ? (
          <div className="w-full min-h-[calc(100vh-150px)] text-center flex items-center justify-center flex-col">
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
            </motion.div>

            <motion.p
              className="text-[clamp(0.9rem,1vw,1rem)] text-gray-700 mb-2.5 dark:text-gray-300"
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              There are no products in this category.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to={"/admin/create-product"} className="flex justify-center items-center gap-1 px-2.5 py-1.25 dark:bg-indigo-400 bg-slate-100 hover:bg-slate-200 dark:hover:bg-indigo-600 dark:text-white active:bg-slate-300 rounded-md text-[14px] font-medium transition-all duration-250">
                <BiArrowBack />
                Create product
              </Link>
            </motion.div>
          </div>
        ) : (
          <ProductGrid>
            {filteredProducts?.map((product) => (
              <RevealOnScroll key={product.id}>
                <ProductCard
                  product={product}
                  isAdmin={true}
                  categoryName={getCategoryName(product.categoryId)}
                />
              </RevealOnScroll>
            ))}
          </ProductGrid>
        )}
      </div>
    </div>
  );
};
