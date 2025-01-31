import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Shop } from "../types/Shop";

export const myApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000" // Убедитесь, что baseUrl указывает на корневой URL
    }),
    endpoints: (builder) => ({
        getShops: builder.query<Shop[], void>({
            query: () => 'shop' // Путь к ресурсу относительно baseUrl
        })
    })
})

export const { useGetShopsQuery } = myApi;
