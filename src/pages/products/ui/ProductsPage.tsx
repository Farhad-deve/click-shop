import { useGetCategoriesQuery } from "../../../entities/category";
import { ProductCard, useGetProductsQuery } from "../../../entities/product";
import { useAppSelector } from "../../../shared/lib/hooks";
import { Loader } from "../../../shared/ui/Loader";
import { RevealOnScroll } from "../../../shared/ui/RevealOnScroll";
import { CategoryList } from "../../../widgets/CategoryList";
import { ProductGrid } from "../../../widgets/ProductGrid";

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
      </div>
    </>
  );
};
