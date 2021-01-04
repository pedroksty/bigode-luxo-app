import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4f5a67" translucent />

      <Auth.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#4f5a67' }
        }}
      >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
      </Auth.Navigator>
    </>
  )
}

export default AuthRoutes
