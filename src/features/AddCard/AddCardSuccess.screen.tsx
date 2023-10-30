import { Button, CardView, ContainerBackground, Title } from '@/components'
import { Container, Subtitle } from './AddCard.styles'
import { Card } from '@/entities'
import theme from '@/theme'

interface AddCardSuccessScreenProps {
  card: Omit<Card, 'id' | 'ccv'>
  onPressFinish: () => void
}

export function AddCardSuccessScreen({
  card,
  onPressFinish,
}: AddCardSuccessScreenProps) {
  return (
    <ContainerBackground>
      <Container>
        <Title>Wallet Test</Title>
        <Subtitle>cartão cadastrado com sucesso</Subtitle>
        <CardView
          color={theme.colors.black}
          title="Black Card"
          {...card}
        />
        <Button
          title="avançar"
          onPress={() => onPressFinish()}
        />
      </Container>
    </ContainerBackground>
  )
}
