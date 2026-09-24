import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark"

const getInitialTheme = () : Theme => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const initialState: { theme: Theme} = {
    theme: getInitialTheme(),
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("dark", state.theme === "dark");
            localStorage.setItem("theme", state.theme);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
