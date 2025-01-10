import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSliceReducr from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducr,
   },
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(apiSlice.middleware),
   devTools: true,
})

export default store;