import styled from 'styled-components/native'

export const Container = styled.View`
  height: 66px;
  width: 100%;
  padding: 0px 5px 5px 5px;
  justify-content: center;
  align-items: center;

  border-radius: 0px 0px 45px 45px;

  background-color: ${({ theme }) => theme.colors.white};
`

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  line-height: 22px;

  font-family: ${({ theme }) => theme.fonts.ptSans.regular};
  color: ${({ theme }) => theme.colors.light.blue};
`
