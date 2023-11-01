import { ViewProps } from 'react-native'
// import { Container, Label, Title } from './CardView.styles'
import { CardHeader } from './CardHeader/CardHeader'
import { CardContent } from './CardContent/CardContent'
import { CardProps } from '../Accordion/Accordion'
import { Container } from './CardView.styles'

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
