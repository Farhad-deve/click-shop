import { CategoryList } from "../../../widgets/category-list"
import { ProductGrid } from "../../../widgets/product-grid"


export const ProductsPage = () => {
  return (
    <>
      <div>
        <CategoryList />

        <div className="py-1.75">
          <ProductGrid />
        </div>
      </div>
    </>
  )
}

