import styled, { css } from 'styled-components/native'
import { ButtonOptions } from './Button'

export interface ButtonProps {
  type?: ButtonOptions
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<ButtonProps>`
  height: 48px;
  width: 300px;

  justify-content: center;
  align-items: center;

  padding: 10px 20px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.light.blue};

  ${({ theme, type }) =>
    type === 'secundary' &&
    css`
      background-color: ${theme.colors.light.green};
    `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.light.gray};
    `}
`

export const Title = styled.Text<ButtonProps>`
  line-height: 20px;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};

  color: ${({ theme }) => theme.colors.white};

  ${({ theme, type }) =>
    type === 'secundary' &&
    css`
      color: ${theme.colors.dark.blue};
    `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.colors.dark.gray};
    `}
`
