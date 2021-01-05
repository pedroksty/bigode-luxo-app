import React from 'react'
import { View, Text, Button } from 'react-native'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation'

import {
  Container,
  TextArea,
  TitleText,
  ParagraphText,
  ImageContainer,
  LadingImage,
  TitleImageText,
  CardContainer
} from './styles'

import barbeImage from '../../assets/barber-room.png'

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const Dashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <Container >
      <TextArea>
        <TitleText>Select your interests</TitleText>
        <ParagraphText>Select the sports, brand and collectons that interest you the most</ParagraphText>
      </TextArea>
      <CardContainer>
        <ImageContainer>
          <TitleImageText>Barbearia</TitleImageText>
          <LadingImage source={barbeImage} />

        </ImageContainer>

        <ImageContainer>
          <TitleImageText>Roupas</TitleImageText>
          <LadingImage source={barbeImage} />

        </ImageContainer>

      </CardContainer>
    </Container>
  )
}

export default Dashboard
