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

  handleRemoveQuiz = (name) => {
    const { dispatch, navigation, decks } = this.props

    dispatch(removeDeck(name))
    removeFromDeck(name)

    navigation.dispatch(NavigationActions.back({ key: null }))
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
          onPress={() => this.handleRemoveQuiz(name)}>
          <ButtonText>Remove Deck</ButtonText>
        </Button>

      </ContainerView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: '#483D8B',
    color: '#fff',
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    width: 150,
  },
  buttonSecondary: {
    alignItems: 'center',
    backgroundColor: '#6A5ACD',
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    width: 150,
  }
})

function mapStateToProps(decks) {
  return decks
}

export default connect(mapStateToProps)(IndividualDeck)