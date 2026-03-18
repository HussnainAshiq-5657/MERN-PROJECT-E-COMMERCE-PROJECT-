import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchProducts = createAsyncThunk('/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log(data);
});

const ProductAPIs = createSlice({
  name: 'FetchProducts',
  initialState: {
    item: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.item = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.pending, (action, state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default ProductAPIs.reducer;
