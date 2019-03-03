import React from 'react'

import {
  Button,
  ButtonLink,
  ButtonText,
  ButtonLinkText,
  ContainerView,
  TitleH1,
  TitleH4
} from '../../utils/styles'

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
      <ContainerView>
        <TitleH4>{currentIndex} / {decks[deckTitle].questions.length}</TitleH4>
        {!displayQuestion ?
          <TitleH1>{decks[deckTitle].questions[currentQuestion].question}</TitleH1> :
          <TitleH1>{decks[deckTitle].questions[currentQuestion].answer}</TitleH1>
        }

        <ButtonLink
          onPress={toggle}
        >
          {!displayQuestion ?
            <ButtonLinkText>Show Answer</ButtonLinkText>
            : <ButtonLinkText>Show Question</ButtonLinkText>}
        </ButtonLink>

        <Button
          buttonTheme='light'
          onPress={() => answerQuestion('correct')}
        >
          <ButtonText>Correct</ButtonText>
        </Button>

        <Button
          onPress={() => answerQuestion('incorrect')}
        >
          <ButtonText>Incorrect</ButtonText>
        </Button>
      </ContainerView>
    )
  }
}


export default QuizDetail