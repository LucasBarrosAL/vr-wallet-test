import styled from 'styled-components/native'

export const Container = styled.View`
  /* background-color: orange; */
`

export const AccordionItem = styled.View``

interface HeaderProps {
  color: string
}

export const Header = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<HeaderProps>`
  height: 75px;
  width: 300px;
  padding: 12px 16px;

  border-radius: 32px 32px 0px 0px;

  background-color: ${({ color }) => color};
`

export const Title = styled.Text``

export const Content = styled.View`
  background-color: yellowgreen;
`
