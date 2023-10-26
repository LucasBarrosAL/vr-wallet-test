import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Home } from './src/features'
import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './src/stacks/MainStack'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
