import { Button, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()
  return (
    <>
      <Text>Home</Text>
      <Text style={{ fontFamily: 'PTSansCaption_400Regular' }}>Home</Text>
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
