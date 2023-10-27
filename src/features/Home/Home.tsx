// import { useNavigation } from '@react-navigation/native'
import {
  BottomImageBackground,
  Container,
  Title,
  TopImageBackground,
} from './Home.styles'
import { Button } from '@/components'

export function Home() {
  // const navigation = useNavigation()

  return (
    <Container>
      <TopImageBackground />
      <Title>Wallet Test</Title>
      <Button title="adicionar cartão" />
      <Button
        title="meus cartões"
        type="secundary"
      />

      <BottomImageBackground />
    </Container>
  )
}
