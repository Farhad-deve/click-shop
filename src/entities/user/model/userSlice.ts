import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoginResponse, User } from "./types";

const STORAGE_KEY = "token";

interface UserState {
    currentUser: User | null;
    token: string | null;
}

const getInitialUserToken = (): string => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? stored : "";
};

const initialState : UserState = {
    currentUser: null,
    token: getInitialUserToken(),
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserRegistered: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload; 
        },
        setUserLoggedIn: (state, action: PayloadAction<LoginResponse>) => {
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem(STORAGE_KEY, action.payload.token);
        },
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
            state.token = null;
            localStorage.removeItem(STORAGE_KEY);
        },
    },
});

export const { setUserRegistered, setUserLoggedIn, setCurrentUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;