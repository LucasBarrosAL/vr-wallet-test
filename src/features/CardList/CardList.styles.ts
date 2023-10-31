import styled from 'styled-components/native'
import theme from '@/theme'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.dark.blue};
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
`

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.white,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`
