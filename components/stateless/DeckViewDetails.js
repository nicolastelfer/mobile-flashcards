import React from 'react'
import { View } from 'react-native'
import {
  TitleH1,
  TitleH4
} from '../../utils/styles'

const DeckViewDetails = ({ title, questions }) => (
  <View>
    <TitleH1>{title}</TitleH1>
    <TitleH4>
      {questions.length > 1
        ? `${questions.length} Cards`
        : `${questions.length} Card`}
    </TitleH4>
  </View>
)

export default DeckViewDetails