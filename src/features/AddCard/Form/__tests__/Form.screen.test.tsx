/* eslint-disable no-undef */
import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import { renderWithProviders } from '@/tests/utils'
import { FormScreen } from '../Form.screen'

describe('FormScreen', () => {
  it('should block button press', () => {
    const handleSubmit = jest.fn()
    const { getByText } = renderWithProviders(
      <FormScreen handleSubmit={handleSubmit} />,
    )

    fireEvent.press(getByText('avançar'))

    expect(handleSubmit).not.toHaveBeenCalled()
  })
})
