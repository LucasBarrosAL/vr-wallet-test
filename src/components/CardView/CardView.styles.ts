import styled, { css } from 'styled-components/native'

interface ContainerProps {
  cardColor?: string
}

export const Container = styled.View<ContainerProps>`
  display: flex;

  width: 300px;
  height: 180px;
  padding: 10px 15px;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  border-radius: 16px;

  background-color: ${({ cardColor }) => cardColor};
`

export const Title = styled.Text`
  line-height: 20px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};

  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
`

interface LabelProps {
  lineHeight?: number
  fontSize?: number
}

export const Label = styled.Text<LabelProps>`
  ${({ fontSize, lineHeight, theme }) => css`
    line-height: ${lineHeight || 16}px;

    font-size: ${fontSize || 14}px;
    font-family: ${theme.fonts.ptSans.regular};

    color: ${({ theme }) => theme.colors.white};
  `}
`
