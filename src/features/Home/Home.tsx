import { Button, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()
  return (
    <>
      <Text>Home</Text>
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
