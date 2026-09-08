import { baseApi } from "../../../shared/api";
import type { LoginPayload, LoginResponse, RegisterPayload, User } from "../model/types";

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserById: builder.query<User, string>({
            query: (id) => `/users/get-one/${id}`
        }),


        register: builder.mutation<User, RegisterPayload>({
            query: (data) => ({
                url: "/users/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation<LoginResponse, LoginPayload>({
            query: (data) => ({
                url: "/users/login",
                method: "POST",
                body: data
            })
        })
    })
})