import { TextProps } from 'react-native'
import { Container, Title } from './header.styles'

interface HeaderProps extends TextProps {
  children: string
}

export function Header({ children, ...rest }: HeaderProps) {
  return (
    <Container>
      <Title {...rest}>{children}</Title>
    </Container>
  )
}
