import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useGetCategoriesQuery } from "../../../entities/category";
import { ProductCard, useGetProductsQuery } from "../../../entities/product";
import { useAppSelector } from "../../../shared/lib/hooks";
import { Loader } from "../../../shared/ui/Loader";
import { RevealOnScroll } from "../../../shared/ui/RevealOnScroll";
import { CategoryList } from "../../../widgets/CategoryList";
import { ProductGrid } from "../../../widgets/ProductGrid";
import { motion } from "motion/react";

export const ProductsPage = () => {
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
    <>
      <div>
        <CategoryList />

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
              There are no products in this category
            </motion.p>
          </div>
        ) : (
          <ProductGrid>
            {filteredProducts?.map((product) => (
              <RevealOnScroll key={product.id}>
                <ProductCard
                  product={product}
                  categoryName={getCategoryName(product.categoryId)}
                />
              </RevealOnScroll>
            ))}
          </ProductGrid>
        )}
      </div>
    </>
  );
};
