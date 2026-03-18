import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'Products',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
    clearItem: (state, action) => {},
  },
});
export const { addItem, reducers, clearItem } = ProductSlice.actions;
export default ProductSlice.reducer;
