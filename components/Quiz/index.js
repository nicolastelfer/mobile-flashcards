import React from 'react'
import { Info, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import { clearLocalNotifications, setLocalNotification } from "../../utils/helpers"

import QuizDetail from './QuizDetail'
import QuizResult from './QuizResult'

class Quiz extends React.Component {

  state = {
    currentQuestion: 0,
    displayQuestion: false,
    correct: 0,
    incorrect: 0
  }

  revealAnswer = () => {
    this.setState((state) => ({
      displayQuestion: !state.displayQuestion
    }))
  }

  answerQuestion = (response) => {
    const { currentQuestion } = this.state
    const deckTitle = this.props.navigation.state.params.entryId
    const decks = this.props.decks
    const correct = decks[deckTitle].questions[currentQuestion].answer.toLowerCase()
    const res = response.toLowerCase()

    if (res === correct) {
      this.setState({ correct: this.state.correct + 1 })
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 })
    }

    this.setState({ currentQuestion: this.state.currentQuestion + 1, displayQuestion: false })

    // Check if it's last quiz question and set new notification form tomorrow
    if (this.state.currentQuestion + 1 === decks[deckTitle].questions.length) {
      clearLocalNotifications()
        .then(setLocalNotification)
    }
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      displayQuestion: false,
      correct: 0,
      incorrect: 0
    })
  }

  render() {
    const { currentQuestion, displayQuestion } = this.state
    const decks = this.props.decks
    const deckTitle = this.props.navigation.state.params.entryId
    const number = this.state.currentQuestion + 1
    const questionsLength = decks[deckTitle].questions.length

    if (this.state.currentQuestion === questionsLength) {
      return (
        <QuizResult
          correct={this.state.correct}
          length={questionsLength}
          restartQuiz={this.restartQuiz}
        />
      )
    } else {
      return(
        <QuizDetail
          answerQuestion={this.answerQuestion}
          currentIndex={number}
          currentQuestion={currentQuestion}
          decks={decks}
          deckTitle={deckTitle}
          displayQuestion={displayQuestion}
          toggle={this.revealAnswer}
        />
      )
    }
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

function mapStateToProps(decks) {
  return decks
}

export default connect(mapStateToProps)(Quiz)