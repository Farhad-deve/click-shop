import { baseApi } from "../../../shared/api";
import type { Product } from "../model/types";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products/get",
      providesTags: ["Product"],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/get-one/${id}`,
    }),
    createProduct: builder.mutation<Product, FormData>({
      query: (formData) => ({
        url: '/products/add',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productApi;
