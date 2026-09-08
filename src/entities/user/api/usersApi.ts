import { baseApi } from "../../../shared/api";

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => `/users/get-one/${id}`
        }),

        
        register: builder.mutation({
            query: (data) => ({
                url: "/users/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/users/login",
                method: "POST",
                body: data
            })
        })
    })
})