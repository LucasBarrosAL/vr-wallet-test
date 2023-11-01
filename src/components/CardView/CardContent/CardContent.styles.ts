import styled, { css } from 'styled-components/native'

interface ContainerProps {
  cardColor?: string
}

export const Container = styled.Pressable<ContainerProps>`
  display: flex;

  width: 300px;
  height: 100px;
  padding: 0px 16px 10px;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;

  border-radius: 0px 0px 16px 16px;

  background-color: ${({ cardColor }) => cardColor};
`

interface LabelProps {
  lineHeight?: number
  fontSize?: number
  textColor?: string
}

export const Label = styled.Text<LabelProps>`
  ${({ fontSize, lineHeight, theme, textColor }) => css`
    line-height: ${lineHeight || 16}px;

    font-size: ${fontSize || 14}px;
    font-family: ${theme.fonts.ptSans.regular};

    color: ${textColor || theme.colors.white};
  `}
`
