import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddCard, CardList, Home } from '../features'
import icPlus from '@/assets/ic_round-plus.png'
import theme from '@/theme'
import { IconButton } from '@/components'

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
        options={({ navigation }) => ({
          title: 'Wallet Test',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.light.blue,
          headerTitleStyle: {
            fontFamily: theme.fonts.ptSansCaption.regular,
            color: theme.colors.dark.blue,
            fontSize: 22,
          },
          headerBackVisible: true,
          headerRight: () => {
            return (
              <IconButton
                source={icPlus}
                onPress={() => navigation.navigate('AddCard')}
              />
            )
          },
        })}
      />
    </Navigator>
  )
}
