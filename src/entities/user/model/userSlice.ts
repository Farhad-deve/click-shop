import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UserRole } from "./types";

interface UserState {
    currentUser: User | null;
    role: UserRole | null;
}

const initialState : UserState = {
    currentUser: null,
    role: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.currentUser = null;
            state.role = null;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;