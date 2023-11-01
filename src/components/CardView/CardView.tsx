import { ViewProps } from 'react-native'
// import { Container, Label, Title } from './CardView.styles'
import { CardHeader } from './CardHeader/CardHeader'
import { CardContent } from './CardContent/CardContent'
import { Container } from './CardView.styles'

export interface CardProps {
  color: string
  textColor: string
  title: string

  id?: string
  number: string
  ccv?: string
  name: string
  expirationDate: string
}
interface CardViewProps extends ViewProps {
  card: CardProps
}

export function CardView({ card, ...rest }: CardViewProps) {
  return (
    <Container {...rest}>
      <CardHeader card={card} />
      <CardContent card={card} />
    </Container>
  )
}
