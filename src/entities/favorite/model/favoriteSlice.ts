import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const STORAGE_KEY = "favorites";

const getInitialFavorites = (): string[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

interface FavoriteState {
    ids: string[];
};

const initialState: FavoriteState = {
    ids: getInitialFavorites(),
};


const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            if (state.ids.includes(id)) {
                state.ids = state.ids.filter((favId) => favId !== id);
            } else {
                state.ids.push(id);
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.ids));
        },
    },
});

export const { toggleFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
