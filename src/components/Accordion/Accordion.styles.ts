// import Animated from 'react-native-reanimated'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 30px;
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
  text-align: center;
  line-height: 18px;
  margin-top: 10px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};

  color: ${({ textColor, theme }) => textColor || theme.colors.white};
`

export const Content = styled(Animated.View)`
  gap: 32px;
`
