import * as React from 'react'
import { Button, View, StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'

const Drawer = createDrawerNavigator()

const AppRoutes: React.FC = () => {
  return (
    <>

      <StatusBar barStyle="light-content" backgroundColor="#28262e" translucent />

      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Details" component={Details} />
      </Drawer.Navigator>

    </>
  )
}

export default AppRoutes
