import { configureStore } from '@reduxjs/toolkit';
import  ProductSliceReducer  from './slice.js';
import  ProductAPIReducer  from './ProductAPIs.js';

const reduxStore = configureStore({
  reducer: {
    ProductSlice: ProductSliceReducer,
    ProductAPI: ProductAPIReducer,
  },
});

export default reduxStore;
