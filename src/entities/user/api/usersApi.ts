import { baseApi } from "../../../shared/api";
import type {
  AdminUser,
  LoginPayload,
  LoginResponse,
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
  }),
});

export const { useGetCurrentUserQuery, useGetAllUsersQuery, useRegisterMutation, useLoginMutation } =
  usersApi;
