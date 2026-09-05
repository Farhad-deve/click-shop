import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "./types";

const STORAGE_KEY = "cart";

const getInitialCartItems = (): CartItem[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: getInitialCartItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const itemId = action.payload.id;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      } else {
        state.items = state.items.filter((item) => item.id !== itemId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      }
    }
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
