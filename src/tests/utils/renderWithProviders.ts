import React from 'react'
import { RenderOptions, render } from '@testing-library/react-native'
import { Providers } from './Providers'

export function renderWithProviders(
  component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions,
) {
  return render(component, options || { wrapper: Providers })
}
