/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './src/stacks/MainStack'
import {
  PTSansCaption_400Regular,
  PTSansCaption_700Bold,
} from '@expo-google-fonts/pt-sans-caption'
import {
  useFonts,
  PTSans_400Regular,
  PTSans_400Regular_Italic,
  PTSans_700Bold,
  PTSans_700Bold_Italic,
} from '@expo-google-fonts/pt-sans'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
    PTSansCaption_400Regular,
    PTSansCaption_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar style="auto" />
      <MainStack />
    </NavigationContainer>
  )
}
