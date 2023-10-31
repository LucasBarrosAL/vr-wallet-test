// import Animated from 'react-native-reanimated'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  /* background-color: orange; */
`

export const AccordionItem = styled.View``

interface HeaderProps {
  color: string
  textColor?: string
}

export const Header = styled.Pressable<HeaderProps>`
  height: 75px;
  width: 300px;
  padding: 16px;

  border-radius: 32px 32px 0px 0px;

  background-color: ${({ color }) => color};
`
interface TextProps {
  textColor?: string
}
export const Title = styled.Text<TextProps>`
  color: ${({ textColor, theme }) => textColor || theme.colors.white};
`

export const Content = styled(Animated.View)`
  /* background-color: yellowgreen; */
`
