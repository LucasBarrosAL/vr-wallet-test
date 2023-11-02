/* eslint-disable no-undef */
import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react-native'
import { CardList } from '../CardList'
import { renderWithProviders } from '@/tests/utils'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}))

describe('CardList', () => {
  beforeAll(() => {
    fetchMock.mockOnceIf('http://localhost:3000/cards', async () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify([
          {
            id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
            number: '3529 5435 3355 8727',
            cvv: '317',
            name: 'John Doe',
            expirationDate: '10/26',
          },
          {
            id: 'd5b759c2-653c-40cd-bd38-a331a834eb67',
            number: '1231 3123 1312 3123',
            name: 'Lucas Barros',
            ccv: '789',
            expirationDate: '04/29',
          },
        ]),
      }),
    )
  })

  it('should show card button', async () => {
    const { queryByText, getByText } = renderWithProviders(<CardList />)

    await waitFor(() => expect(queryByText('usar este cartão')).toBeTruthy())

    fireEvent.press(getByText('Black Card'))

    expect(queryByText('pagar com este cartão')).toBeTruthy()
  })
})
