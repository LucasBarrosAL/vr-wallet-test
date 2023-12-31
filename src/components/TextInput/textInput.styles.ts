import styled from 'styled-components/native'
import { MaskedTextInput } from 'react-native-mask-text'

export const Container = styled.View`
  flex: 1;
  max-height: 74px;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.Text`
  line-height: 16px;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};

  color: ${({ theme }) => theme.colors.light.gray};
`

interface ContentProps {
  hasError?: boolean
}

export const Content = styled.View<ContentProps>`
  height: 46px;
  padding: 5px 10px;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.white};

  border: ${({ hasError, theme }) =>
    hasError ? `2px ${theme.colors.alert.red}` : '0px'};
`

export const InputMask = styled(MaskedTextInput)`
  flex: 1;

  line-height: 18px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};
`

export const Input = styled.TextInput`
  flex: 1;

  line-height: 18px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};
`
