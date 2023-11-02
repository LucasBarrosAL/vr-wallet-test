import { CardProps } from '../CardView'
import { Header, Title } from './cardHeader.styles'

interface CardHeaderProps {
  card: CardProps
  onPress?: () => void
}

export function CardHeader({ card, onPress }: CardHeaderProps) {
  return (
    <Header
      color={card.color}
      key={card.id}
      onPress={onPress}
    >
      <Title textColor={card.textColor}>{card.title}</Title>
    </Header>
  )
}
