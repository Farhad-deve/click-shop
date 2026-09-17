import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  type: "login" | "deleteProduct" | null;
  productId: string | null;
}

const initialState: ModalState = {
  type: null,
  productId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ type: "login" | "deleteProduct"; productId?: string; }>,) => {
      state.type = action.payload.type;
      state.productId = action.payload.productId ?? null;
    },
    closeModal: (state) => {
      state.type = null;
      state.productId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
