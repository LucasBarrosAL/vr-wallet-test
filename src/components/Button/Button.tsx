import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './button.styles'
export type ButtonOptions = 'primary' | 'secundary'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  onPress?: () => void
  disabled?: boolean
  type?: ButtonOptions
}

export function Button({
  title,
  onPress,
  disabled = false,
  type = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <Container
      disabled={disabled}
      type={type}
      onPress={onPress}
      {...rest}
    >
      <Title
        disabled={disabled}
        type={type}
      >
        {title}
      </Title>
    </Container>
  )
}
