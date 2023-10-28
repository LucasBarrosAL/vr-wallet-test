import { useNavigation } from '@react-navigation/native'
import { Container, Title } from './Home.styles'
import { Button, ContainerBackground } from '@/components'

export function Home() {
  const navigation = useNavigation()

  return (
    <ContainerBackground>
      <Container>
        <Title>Wallet Test</Title>
        <Button
          title="meus cartões"
          onPress={() => navigation.navigate('CardList')}
        />
        <Button
          title="adicionar cartão"
          type="secundary"
          onPress={() => navigation.navigate('AddCard')}
        />
      </Container>
    </ContainerBackground>
  )
}
