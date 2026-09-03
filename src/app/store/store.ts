import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api";
import { categoryFilterReducer } from "../../features/category-filter";
import { userReducer } from "../../entities/user";
import { favoriteReducer } from "../../entities/favorite";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        categoryFilter: categoryFilterReducer,
        user: userReducer,
        favorite: favoriteReducer,
    },
    middleware: (getDefault) => getDefault().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;