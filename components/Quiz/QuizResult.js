import React from 'react'
import {Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import {
  Button,
  ButtonLink,
  ButtonText,
  ButtonLinkText,
  ContainerView,
  FieldSetView,
  Input,
  KeyboardAvoidingView,
  Label,
  TitleH1,
  TitleH3,
  TitleH4
} from '../../utils/styles'


const ResultsMessage = (props) => {
  const { score } = props
  if (score > 80) {
    return
      <Label>Well Done!</Label>
  } else if (score < 50) {
    return <Label>Could do better!</Label>
  } else {
    return <Label>Good Effort!</Label>
  }
}

class QuizResult extends React.Component {
  goBack = () => {

  }

  render() {
    const { correct, length, restartQuiz } = this.props
    return (
      <ContainerView>
        <TitleH1>You finished!</TitleH1>
        <TitleH4>You marked {Math.round((correct/length)*100)}% of the correct answers!</TitleH4>
        <ResultsMessage score={Math.round((correct/length)*100)} />
        <Button onPress={restartQuiz}>
          <ButtonText>Restart Quiz</ButtonText>
        </Button>
      </ContainerView>
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