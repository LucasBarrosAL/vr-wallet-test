import { ImageSourcePropType } from 'react-native'
import { Container, Icon } from './IconButton.styles'

interface IconButtonProps {
  source: ImageSourcePropType
  onPress?: () => void
}

export function IconButton({ source, onPress }: IconButtonProps) {
  return (
    <Container onPress={onPress}>
      <Icon source={source} />
    </Container>
  )
}
