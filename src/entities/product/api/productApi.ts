import { baseApi } from "../../../shared/api";
import type { Product } from '../model/types'; 

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products/get",
        }),
    }),
});

export const { useGetProductsQuery } = productApi;