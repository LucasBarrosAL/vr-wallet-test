import styled from 'styled-components/native'

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

export const Content = styled.View`
  height: 46px;
  padding: 5px 10px;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.white};
`

export const Input = styled.TextInput`
  flex: 1;

  line-height: 18px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};
`
