import styled from 'styled-components/native'

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.ptSansCaption.bold};
  color: ${({ theme }) => theme.colors.dark.gray};
`
