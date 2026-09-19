import { baseApi } from "../../../shared/api";
import type { Category, CategoryResponse } from "../model/types";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories/get",
      providesTags: ["Category"],
    }),
    addCategory: builder.mutation<CategoryResponse, FormData>({
      query: (formData) => ({
        url: '/categories/add',
        method: 'POST',
        body: formData,
      })
    }),
    deleteCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `/categories/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery, useDeleteCategoryMutation } = categoryApi;
