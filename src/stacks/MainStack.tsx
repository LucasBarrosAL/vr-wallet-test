import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddCard, CardList, Home } from '../features'

const Stack = createNativeStackNavigator()

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
      />
      <Stack.Screen
        name="CardList"
        component={CardList}
      />
    </Stack.Navigator>
  )
}
