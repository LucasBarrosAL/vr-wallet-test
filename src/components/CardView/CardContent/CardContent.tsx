import { getHideCardNumber } from '@/utils'
import { CardProps } from '../CardView'
import { Container, Label } from './cardContent.styles'

interface CardContentProps {
  card: CardProps
  onPress?: () => void
}

export function CardContent({ card, onPress }: CardContentProps) {
  return (
    <Container
      cardColor={card.color}
      onPress={onPress}
    >
      <Label
        fontSize={16}
        lineHeight={18}
        textColor={card.textColor}
      >
        {card.name}
      </Label>
      <Label textColor={card.textColor}>{getHideCardNumber(card.number)}</Label>
      <Label
        textColor={card.textColor}
      >{`Validade ${card.expirationDate}`}</Label>
    </Container>
  )
}
