import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('/fetchProducts', async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw new Error('Failed to Fetch Products');
  }
});

const ProductAPI = createSlice({
  name: 'ProductAPI',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default ProductAPI.reducer;
