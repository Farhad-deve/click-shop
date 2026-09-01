import { useGetCategoriesQuery } from "../../../entities/category";
import { ProductCard, useGetProductsQuery } from "../../../entities/product";
import { useAppSelector } from "../../../shared/lib/hooks";
import { RevealOnScroll } from "../../../shared/ui/RevealOnScroll";

export const ProductGrid = () => {
  const { data: products } = useGetProductsQuery();
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

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 w-[95%] mx-auto max-w-350">
        {filteredProducts?.map((product) => (
          <RevealOnScroll key={product.id}>
            <ProductCard
              product={product}
              categoryName={getCategoryName(product.categoryId)}
            />
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
};
