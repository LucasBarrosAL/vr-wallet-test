import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddCard, CardList, Home } from '../features'
import theme from '@/theme'

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
        options={{
          title: 'cadastro',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.light.blue,
          headerTitleStyle: {
            fontFamily: theme.fonts.ptSansCaption.regular,
            fontSize: 22,
          },
          headerBackVisible: true,
        }}
      />
      <Screen
        name="CardList"
        component={CardList}
      />
    </Navigator>
  )
}
