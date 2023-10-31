import styled from 'styled-components/native'
import theme from '@/theme'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.dark.blue};
`

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 10px 16px;

  gap: 10px;
`

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: theme.colors.white,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`
