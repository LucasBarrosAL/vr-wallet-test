import * as Crypto from 'expo-crypto'
import { Card } from '@/entities'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.2.2:3000' }),
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
    }),
    getCards: builder.query<Card[], void>({
      query: () => `/cards`,
    }),
  }),
})
