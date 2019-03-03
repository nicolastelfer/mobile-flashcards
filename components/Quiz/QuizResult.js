import React from 'react'
import {Text, TouchableOpacity, StyleSheet, View } from 'react-native'

const TryAgain = ({ onPress }) => {

  return (
    <View>
      <Text>Try Again</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Restart Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

const ResultsMessage = (props) => {
  const { score, restartQuiz } = props
  if (score > 80) {
    return <Text>Well Done!</Text>
  } else if (score < 50) {
    return <TryAgain onPress={restartQuiz}/>
  } else {
    return <Text>Good Effort!</Text>
  }
}

class QuizResult extends React.Component {
  render() {
    const { correct, length, restartQuiz } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>You finished!</Text>
          <Text>You got {Math.round((correct/length)*100)}% of the correct answers!</Text>
          <ResultsMessage score={Math.round((correct/length)*100)} restartQuiz={restartQuiz} />
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

export default QuizResult