import { CardProps } from '@/components/Accordion/Accordion'
import { Container, Label } from './CardContent.styles'

interface CardContentProps {
  card: CardProps
  onPress?: () => void
}

export function CardContent({ card, onPress }: CardContentProps) {
  const lastDigits = card.number.split(' ')

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
      <Label
        textColor={card.textColor}
      >{`•••• •••• •••• ${lastDigits[3]}`}</Label>
      <Label
        textColor={card.textColor}
      >{`Validade ${card.expirationDate}`}</Label>
    </Container>
  )
}
