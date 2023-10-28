import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddCard, CardList, Home } from '../features'

const { Navigator, Screen } = createNativeStackNavigator()

export function MainStack() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="AddCard"
        component={AddCard}
      />
      <Screen
        name="CardList"
        component={CardList}
      />
    </Navigator>
  )
}
