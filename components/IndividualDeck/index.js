import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {NavigationActions} from "react-navigation";
import { connect } from 'react-redux'

import {
  Button,
  ButtonText,
  ContainerView,
  FieldSetView,
  Input,
  KeyboardAvoidingView,
  Label,
  TitleH1,
  TitleH4
} from '../../utils/styles'

import AddCard from '../AddCard'
import { removeDeck } from '../../actions/decks'
import { removeFromDeck } from "../../utils/api";

class IndividualDeck extends React.Component {

  handleStartQuiz = (name) => {
    const { navigation } = this.props

    navigation.navigate('Quiz', { entryId: name })
  }

  handleRemoveQuiz = (deck) => {
    const { dispatch, navigation, decks } = this.props

    removeFromDeck(deck.title)

    dispatch(removeDeck(deck.title))

    navigation.dispatch(this.props.navigation.navigate('Home'))
  }

  render() {
    const name = this.props.navigation.state.params.entryId
    const { decks } = this.props

    return (
      <ContainerView>
        <TitleH1>{decks[name].title}</TitleH1>
        <TitleH4>Cards: {decks[name].questions.length}</TitleH4>

        <Button
          onPress={() => this.props.navigation.navigate(
          'AddCard',
          {entryId: name}
        )}>
          <ButtonText>Add Card</ButtonText>
        </Button>
        {decks[name].questions.length > 0
          ? (
            <Button
              buttonTheme='light'
              onPress={() => this.handleStartQuiz(name)}>
              <ButtonText>Start Quiz</ButtonText>
            </Button>
          )
          : null
        }

        <Button
          buttonTheme='lighter'
          onPress={() => this.handleRemoveQuiz(decks[name])}>
          <ButtonText>Remove Deck</ButtonText>
        </Button>

      </ContainerView>
    )
  }
}

function mapStateToProps(decks) {
  return decks
}

export default connect(mapStateToProps)(IndividualDeck)