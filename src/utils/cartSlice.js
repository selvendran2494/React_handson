import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items.pop();
    },
    clearItem: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, deleteItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
