import React from 'react'
import {Text, TouchableOpacity, StyleSheet, View } from 'react-native'

class QuizDetail extends React.Component {
  render() {
    const {
      answerQuestion,
      decks,
      deckTitle,
      displayQuestion,
      currentQuestion,
      currentIndex,
      toggle
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>{currentIndex} / {decks[deckTitle].questions.length}</Text>
          {!displayQuestion ?
            <Text>{decks[deckTitle].questions[currentQuestion].question}</Text> :
            <Text>{decks[deckTitle].questions[currentQuestion].answer}</Text>
          }

          <TouchableOpacity
            style={styles.link}
            onPress={toggle}
          >
            {!displayQuestion ?
              <Text>Show Answer</Text>
              : <Text>Show Question</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => answerQuestion('correct')}
          >
            <Text>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => answerQuestion('incorrect')}
          >
            <Text>Incorrect</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D8BFD8',
    alignItems: 'center',
    width: 300,
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: '#483D8B',
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
  },
  input: {
    height: 40, width: 100, borderColor: 'gray', padding: 10, marginTop: 20, borderWidth: 1
  }
})

export default QuizDetail