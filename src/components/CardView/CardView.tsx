import { Container, Label, Title } from './CardView.styles'

interface CardViewProps {
  color: string
  title: string
  name: string
  number: string
  expirationDate: string
}

export function CardView({
  color,
  title,
  name,
  number,
  expirationDate,
}: CardViewProps) {
  return (
    <Container cardColor={color}>
      <Title>{title}</Title>
      <Label
        fontSize={16}
        lineHeight={18}
      >
        {name}
      </Label>
      <Label>{number}</Label>
      <Label>{expirationDate}</Label>
    </Container>
  )
}
