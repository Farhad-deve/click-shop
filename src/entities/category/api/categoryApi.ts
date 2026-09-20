import { baseApi } from "../../../shared/api";
import type { Category } from "../model/types";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories/get",
      providesTags: ["Category"],
    }),
    createCategory: builder.mutation<Category, FormData>({
      query: (formData) => ({
        url: '/categories/add',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Category'],
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

export const { useGetCategoriesQuery, useDeleteCategoryMutation, useCreateCategoryMutation } = categoryApi;
