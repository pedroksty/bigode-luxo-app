import React from 'react'
import { View, Text, Button } from 'react-native'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation'

// import { Container } from './styles';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const Dashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} >
    </View>
  )
}

export default Dashboard
