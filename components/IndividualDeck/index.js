import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {NavigationActions} from "react-navigation";
import { connect } from 'react-redux'

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
      <View style={styles.container}>
        <Text>{decks[name].title}</Text>
        <Text>{decks[name].questions.length}</Text>

        <TouchableOpacity style={styles.buttonPrimary} onPress={() => this.props.navigation.navigate(
          'AddCard',
          {entryId: name}
        )}>
          <Text style={{ color: 'white' }}>Add Card</Text>
        </TouchableOpacity>
        {decks[name].questions.length > 0
          ? (
            <TouchableOpacity style={styles.buttonSecondary} onPress={() => this.handleStartQuiz(name)}>
              <Text style={{ color: 'white' }}>Start Quiz</Text>
            </TouchableOpacity>
          )
          : null
        }

        <TouchableOpacity style={styles.buttonPrimary} onPress={() => this.handleRemoveQuiz(name)}>
          <Text style={{ color: 'white' }}>Remove Deck</Text>
        </TouchableOpacity>

      </View>
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