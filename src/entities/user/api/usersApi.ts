import { baseApi } from "../../../shared/api";
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  User,
} from "../model/types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<User, void>({
      query: () => `/users/get-one`,
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
    }),
  }),
});

export const { useGetCurrentUserQuery, useRegisterMutation, useLoginMutation } = usersApi;