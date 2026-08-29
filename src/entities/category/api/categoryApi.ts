import { baseApi } from "../../../shared/api";
import type { Category } from "../model/types";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => "/categories/get",
        }),
    }),
});

export const { useGetCategoriesQuery } = categoryApi;