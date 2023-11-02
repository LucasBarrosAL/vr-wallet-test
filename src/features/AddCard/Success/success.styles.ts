import styled from 'styled-components/native'

export const Container = styled.View`
  max-width: 300px;
  gap: 10px;
`

export const Subtitle = styled.Text`
  text-align: center;

  font-size: 20px;
  line-height: 22px;

  font-family: ${({ theme }) => theme.fonts.ptSansCaption.regular};
  color: ${({ theme }) => theme.colors.white};
`
