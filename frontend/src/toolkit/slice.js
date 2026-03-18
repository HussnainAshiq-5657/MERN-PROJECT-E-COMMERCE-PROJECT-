import { createSlice } from '@reduxjs/toolkit';

const SetProduct = createSlice({
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
export const { addItem , reducers , clearItem} = SetProduct.actions;
export default SetProduct.reducer;
