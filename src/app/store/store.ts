import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api";
import { categoryFilterReducer } from "../../features/category-filter";
import { userReducer } from "../../entities/user";
import { favoriteReducer } from "../../entities/favorite";
import { cartReducer } from "../../entities/cart";
import { modalReducer } from "../../entities/modal";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        categoryFilter: categoryFilterReducer,
        user: userReducer,
        favorite: favoriteReducer,
        cart: cartReducer,
        modal: modalReducer,
    },
    middleware: (getDefault) => getDefault().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;