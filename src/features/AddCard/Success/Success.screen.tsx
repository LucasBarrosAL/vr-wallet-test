import { Button, CardView, ContainerBackground, Title } from '@/components'
import { Container, Subtitle } from './success.styles'
import { Card } from '@/entities'
import theme from '@/theme'

interface SuccessScreenProps {
  card: Omit<Card, 'id' | 'ccv'>
  onPressFinish: () => void
}

export function SuccessScreen({ card, onPressFinish }: SuccessScreenProps) {
  return (
    <ContainerBackground>
      <Container>
        <Title>Wallet Test</Title>
        <Subtitle>cartão cadastrado com sucesso</Subtitle>
        <CardView
          card={{
            color: theme.colors.black,
            title: 'Black Card',
            textColor: theme.colors.white,
            ...card,
          }}
        />
        <Button
          title="avançar"
          onPress={() => onPressFinish()}
        />
      </Container>
    </ContainerBackground>
  )
}
