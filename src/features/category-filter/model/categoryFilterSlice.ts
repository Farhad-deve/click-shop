import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CategoryFilterState {
    selectedCategory: string;
}

const initialState: CategoryFilterState = {
    selectedCategory: "all",
};

const categoryFilterSlice = createSlice({
    name: "categoryFilter",
    initialState,
    reducers: {
        setSelectedCategory: (state, action : PayloadAction<string>) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setSelectedCategory } = categoryFilterSlice.actions;
export const categoryFilterReducer = categoryFilterSlice.reducer;