import * as Crypto from 'expo-crypto'
import { Card } from '@/entities/cards'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface CardProps {
  number: string
  name: string
  ccv: string
}

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.2.2:3000' }),
  endpoints: builder => ({
    createCard: builder.mutation<Card, CardProps>({
      query: ({ number, name, ccv }) => ({
        url: '/cards',
        method: 'POST',
        body: {
          id: Crypto.randomUUID(),
          number,
          name,
          ccv,
        },
      }),
    }),
  }),
})
