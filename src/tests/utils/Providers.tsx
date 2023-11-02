import { store } from '@/store'
import theme from '@/theme'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

export function Providers(props: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{props.children}</Provider>
    </ThemeProvider>
  )
}
