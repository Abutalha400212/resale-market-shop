import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./service/baseApi";
import { filterSlice } from "./features/filter/flter.slice";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
