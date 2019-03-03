// Styles
import styled from 'styled-components/native'
import { themeColorPrimary, themeColorSecondary, themeColorTerciary, themeColorLight } from './helpers'

export const DeckCardView = styled.View`
  background: ${themeColorTerciary};
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 5px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
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

export const TitleH3 = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const TitleH4 = styled.Text`
  font-size: 14px;
  color: black;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${themeColorLight};
  text-transform: uppercase;
`;