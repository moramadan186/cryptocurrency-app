
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'dbcdddfc73msh73e5f87412b7ac5p1e3db7jsn9ca9694b02f1',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const reqInfo = (url) => ({ url, headers: cryptoNewsApiHeaders })
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => reqInfo(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;