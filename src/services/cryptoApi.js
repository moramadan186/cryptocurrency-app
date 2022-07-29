
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'dbcdddfc73msh73e5f87412b7ac5p1e3db7jsn9ca9694b02f1',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const reqInfo = (url) => ({ url, headers: cryptoApiHeaders })
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => reqInfo('/coins'),
        }),
    }),
})

export const { useGetCryptosQuery } = cryptoApi;