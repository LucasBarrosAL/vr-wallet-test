/* eslint-disable no-undef */
import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { AddCard } from '../AddCard'
import { Providers } from '@/tests/utils'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}))

describe('AddCard', () => {
  beforeAll(() => {
    fetchMock.mockIf(/^http?:\/\/localhost:3000\/cards$/, async req => {
      if (req.method === 'POST') {
        return Promise.resolve({
          status: 201,
          body: JSON.stringify({
            id: 'ee5a7b06-bab1-4b84-98ad-7b6b0ad0c85b',
            number: '1234 5678 9876 5432',
            ccv: '123',
            name: 'Tester Silva',
            expirationDate: '11/29',
          }),
        })
      } else {
        return {
          status: 200,
          body: JSON.stringify({
            cards: [
              { id: '1', name: 'Card 1' },
              { id: '2', name: 'Card 2' },
            ],
          }),
        }
      }
    })
  })

  test('displays AddCardSuccessScreen after successful card creation', async () => {
    const { queryByText, getByText, getByTestId, getByPlaceholderText } =
      render(<AddCard />, { wrapper: Providers })

    const numberInput = getByTestId('input-card-number')
    fireEvent.changeText(numberInput, '1234 5678 9876 5432')

    const nameInput = getByTestId('input-card-name')
    fireEvent.changeText(nameInput, 'Tester Silva')

    const expirationInput = getByPlaceholderText('00/00')
    fireEvent.changeText(expirationInput, '11/29')

    const exInput = getByPlaceholderText('***')
    fireEvent.changeText(exInput, '123')

    fireEvent.press(getByText('avançar'))
    await waitFor(() =>
      expect(queryByText('cartão cadastrado com sucesso')).toBeTruthy(),
    )
  })
})
