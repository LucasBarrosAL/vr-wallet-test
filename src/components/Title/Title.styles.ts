import styled from 'styled-components/native'

export const Title = styled.Text`
  line-height: 32px;
  text-align: center;

  font-size: 28px;

  font-family: ${({ theme }) => theme.fonts.ptSansCaption.regular};
  color: ${({ theme }) => theme.colors.white};
`
