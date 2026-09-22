import { baseApi } from "../../../shared/api";
import type {
  AdminUser,
  LoginPayload,
  LoginResponse,
  Order,
  RegisterPayload,
  User,
} from "../model/types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<AdminUser[], void>({
      query: () => "/users/get",
    }),

    getCurrentUser: builder.query<User, void>({
      query: () => `/users/get-one`,
      providesTags: ["CurrentUser"]
    }),

    register: builder.mutation<User, RegisterPayload>({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CurrentUser"],
    }),

    getAllOrders: builder.query<Order[], void>({
      query: () => "/users/get-orders-admin"
    })
  }),
});

export const { useGetCurrentUserQuery, useGetAllUsersQuery, useGetAllOrdersQuery, useRegisterMutation, useLoginMutation } =
  usersApi;
