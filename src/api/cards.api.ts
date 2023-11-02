import * as Crypto from 'expo-crypto'
import { Card } from '@/entities'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.EXPO_PUBLIC_API_URL

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl || 'http://localhost:3000' }),
  tagTypes: ['Cards'],
  endpoints: builder => ({
    createCard: builder.mutation<Card, Omit<Card, 'id'>>({
      query: body => ({
        url: '/cards',
        method: 'POST',
        body: {
          id: Crypto.randomUUID(),
          ...body,
        },
      }),
      invalidatesTags: ['Cards'],
    }),
    getCards: builder.query<Card[], void>({
      query: () => `/cards`,
      providesTags: ['Cards'],
    }),
  }),
})
