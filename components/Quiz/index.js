import React from 'react'
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
    const deckTitle = this.props.navigation.state.params.entryId
    const decks = this.props.decks
    const res = response.toLowerCase()

    if (res === 'correct') {
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

  goToDeck = (text) => {
    this.props.navigation.navigate('IndividualDeck', { entryId: text })
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
          goBack={() => this.goToDeck(deckTitle)}
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

function mapStateToProps(decks) {
  return decks
}

export default connect(mapStateToProps)(Quiz)