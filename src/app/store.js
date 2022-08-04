import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { exchangesApi } from "./../services/exchangesApi";
export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [exchangesApi.reducerPath]: exchangesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
