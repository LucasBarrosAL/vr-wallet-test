import { ImageSourcePropType } from 'react-native'
import { Container, Icon } from './IconButton.styles'

interface IconButtonProps {
  source: ImageSourcePropType
}

export function IconButton({ source }: IconButtonProps) {
  return (
    <Container>
      <Icon source={source} />
    </Container>
  )
}
