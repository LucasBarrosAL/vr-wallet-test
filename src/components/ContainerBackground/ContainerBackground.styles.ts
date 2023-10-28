import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark.blue};
  justify-content: center;
  align-items: center;
`

export const TopImageBackground = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 300px;
  position: absolute;
  top: -200px;
  left: 0px;
`
export const BottomImageBackground = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 300px;
  position: absolute;
  bottom: -200px;
  right: 0;
`
