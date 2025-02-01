import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Shop } from "../types/Shop";

export const myApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000" // Убедитесь, что baseUrl указывает на корневой URL
    }),
    endpoints: (builder) => ({
        getShops: builder.query<Shop[], void>({
            query: () => 'shop' // Путь к ресурсу относительно baseUrl
        }),
        getItemsOfShop: builder.query<Product[], string>({
            query: (id) => `shop/${id}/items`
        })
    })
})

export const { useGetShopsQuery, useGetItemsOfShopQuery } = myApi;
