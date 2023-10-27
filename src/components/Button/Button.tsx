import { Container, Title } from './Button.styles'
export type ButtonOptions = 'primary' | 'secundary'

interface ButtonProps {
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
}: ButtonProps) {
  return (
    <Container
      disabled={disabled}
      type={type}
      onPress={onPress}
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
