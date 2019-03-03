// Styles
import styled from 'styled-components/native'
import {
  themeColorPrimary,
  themeColorSecondary,
  themeColorTertiary,
  themeColorLight,
  themeColorGreyPrimary,
  themeColorGreySecondary,
  themeColorGreyTertiary,
  themeColorQuaternary
} from './helpers'

export const AppView = styled.View`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const AppContainerView = styled.View`
  height: 100%;
  width: 100%;
`

export const ContainerView = styled.View`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 0 5%;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 0 5%;
`

export const DeckCardView = styled.View`
  background: ${themeColorTertiary};
  align-items: center;
  flex-wrap: nowrap;
  margin: 10px 10px 0;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
`

export const FieldSetView = styled.View`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`

export const DeckCardTitleView = styled.View`
  flex-grow: 1;
`

export const DeckCardButtonView = styled.TouchableOpacity`
  align-items: center;
  background: ${themeColorPrimary};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 10px;
  width: 50px;
`

export const TitleH1 = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const TitleH3 = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const TitleH4 = styled.Text`
  font-size: 14px;
  color: black;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background: ${props => 
    props.buttonTheme === 'lighter' ? themeColorQuaternary
      : props.buttonTheme === 'light' ? themeColorSecondary : themeColorPrimary};
  display: flex;
  justify-content: center;
  height: 50px;
  margin-top: 20px;
  opacity: ${props => props.buttonStatus === true ? 0.5 : 1}
  padding: 10px 40px;
  width: 100%;
`

export const ButtonLink = styled.TouchableOpacity`
  border: 1px solid ${themeColorPrimary};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
`

export const ButtonLinkText = styled.Text`
  font-weight: bold;
  color: ${themeColorPrimary};
  text-transform: uppercase;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${themeColorLight};
  text-transform: uppercase;
`;

export const Label = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  border: 2px solid ${themeColorGreyPrimary};
  color: ${themeColorGreyTertiary};
  height: 50px;
  padding: 10px;
  width: 100%;
`;