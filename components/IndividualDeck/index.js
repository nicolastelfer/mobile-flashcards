import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import AddCard from '../AddCard'

class IndividualDeck extends React.Component {

  handleStartQuiz = () => {
    console.log('Start Quiz')
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
            <TouchableOpacity style={styles.buttonSecondary} onPress={this.handleStartQuiz}>
              <Text style={{ color: 'white' }}>Start Quiz</Text>
            </TouchableOpacity>
          )
          : null
        }
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