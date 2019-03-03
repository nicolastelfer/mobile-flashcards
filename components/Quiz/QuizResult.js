import React from 'react'
import {
  Button,
  ButtonText,
  ContainerView,
  Label,
  TitleH1,
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


  render() {
    const { correct, length, restartQuiz, goBack } = this.props
    return (
      <ContainerView>
        <TitleH1>You finished!</TitleH1>
        <TitleH4>You marked {Math.round((correct/length)*100)}% of the correct answers!</TitleH4>
        <ResultsMessage score={Math.round((correct/length)*100)} />
        <Button onPress={restartQuiz}>
          <ButtonText>Restart Quiz</ButtonText>
        </Button>
        <Button
          buttonTheme='light'
          onPress={goBack}>
          <ButtonText>Go to your decks</ButtonText>
        </Button>
      </ContainerView>
    )
  }
}

export default QuizResult