import styled from 'styled-components/native'

export const Container = styled.View`
  flex:1;
  background: #141317;
  align-items: center;
`

export const TextArea = styled.View`
  padding: 50px 50px 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TitleText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 22px;
  font-family: 'Staatliches_400Regular';
  letter-spacing: 1px;
`
export const CardContainer = styled.View`
  flex:1;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const ParagraphText = styled.Text`
  color: #403f3e;
  font-size: 16px;
  text-align: center;
  font-family: 'Staatliches_400Regular';
`
export const ImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 270px;
`
export const LadingImage = styled.Image`
  width: 300px;
  height: 270px;
  border-radius: 5px;

`
export const TitleImageText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 22px;
  font-family: 'Staatliches_400Regular';
  letter-spacing: 1px;

  position: absolute;
  z-index: 10;
`
