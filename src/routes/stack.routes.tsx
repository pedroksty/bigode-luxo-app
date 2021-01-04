import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Details from '../pages/Details'
import Dashboard from '../pages/Dashboard'
import Search from '../pages/Search'
import SearchDetails from '../pages/SearchDetails'
import CreateCall from '../pages/CreateCall'

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8'
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back'
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} headerMode="none" >
      <Stack.Screen name="Chamados" component={Dashboard} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Create" component={CreateCall} />
    </Stack.Navigator>
  )
}

const SearchNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} headerMode="none" >
      <Stack.Screen name="Buscar" component={Search} />
      <Stack.Screen name="Exibir" component={SearchDetails} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator, SearchNavigation }
