// import Animated from 'react-native-reanimated'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  /* gap: 10px; */
`

export const AccordionItem = styled.View``

interface HeaderProps {
  color: string
  textColor?: string
}

export const Header = styled.Pressable<HeaderProps>`
  width: 300px;
  padding: 32px 16px 20px;

  border-radius: 16px 16px 0px 0px;

  background-color: ${({ color }) => color};
`
interface TextProps {
  textColor?: string
}
export const Title = styled.Text<TextProps>`
  line-height: 20px;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.ptSans.regular};

  color: ${({ textColor, theme }) => textColor || theme.colors.white};
`

export const Content = styled(Animated.View)``

export const AnimatedContent = styled(Animated.View)``
