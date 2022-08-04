// this endpoint requires a pro plan to use it.

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const headers = {
  "x-access-token":
    "coinranking7b004a79131a10f45e900270356149dcb37d04fd12850f0f",
};
const baseUrl = "https://api.coinranking.com/v2";
export const exchangesApi = createApi({
  reducerPath: "exchanges",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: (count) => {
        return { url: "/exchanges", headers, mode: "no-cors" };
      },
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;
