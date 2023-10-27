import { Button, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Title } from './Home.styles'

export function Home() {
  const navigation = useNavigation()
  return (
    <>
      <Text>Home</Text>
      <Title>Home</Title>
      <Text style={{ fontFamily: 'PTSans_400Regular' }}>Home</Text>
      <Button
        title="Cadastrar"
        onPress={() => {
          navigation.navigate('AddCard' as never)
        }}
      />
      <Button
        title="Meus cartoes"
        onPress={() => {
          navigation.navigate('CardList' as never)
        }}
      />
    </>
  )
}
