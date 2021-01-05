import 'react-native-gesture-handler'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

import { Staatliches_400Regular, useFonts } from '@expo-google-fonts/staatliches'

export default function App() {
  const [fontsloaded] = useFonts({
    Staatliches_400Regular
  })

  if (!fontsloaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: '#4f5a67' }}>
        <Routes />
      </View>
    </NavigationContainer>
  )
}
