import styled from 'styled-components/native'

interface TextProps {
  textColor?: string
}
export const Title = styled.Text<TextProps>`
  text-align: center;
  line-height: 18px;
  margin-top: 10px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};

  color: ${({ textColor, theme }) => textColor || theme.colors.white};
`
