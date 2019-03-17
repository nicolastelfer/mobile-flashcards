import React from 'react'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import {
  Button,
  ButtonText,
  FieldSetView,
  Input,
  KeyboardAvoidingView,
  Label,
} from '../../utils/styles'

import { addCard } from '../../actions/cards';
import { addCardToDeck } from '../../utils/api'

class AddCard extends React.Component {
  state = {
    question: '',
    answer: '',
    buttonStateHolder: true
  }

  addCard = (title) => {
    const { question, answer } = this.state
    const { dispatch, navigation } = this.props

    const card = {
      question,
      answer
    }

    dispatch(addCard(title, { question, answer }))

    this.setState({ question: '', answer: '' })

    addCardToDeck(title, card)

    navigation.dispatch(NavigationActions.back({ key: null }))
  }

  handleOnChange = (e, type) => {
    // Set the correct state for each type of input value
    switch (type) {
      case 'question' :
        this.setState({ question: e })
        break
      case 'answer' :
        this.setState({ answer: e })
        break
      default :
        return false
    }
    // Grabs the value of question and answer from the state
    const { answer, question } = this.state
    // Sets new state to the button status
    this.setState({ buttonStateHolder: !(question !== '' && answer !== '') })
  }

  render() {
    const deckName = this.props.navigation.state.params.entryId
    const { buttonStateHolder } = this.state

    return(
      <KeyboardAvoidingView behaviour='padding'>
        <FieldSetView>
          <Label>Question</Label>
          <Input
            placeholder="Add Question"
            onChangeText={(e) => this.handleOnChange(e, 'question')}
            value={this.state.question} />
        </FieldSetView>
        <FieldSetView>
          <Label>Answer</Label>
          <Input
            placeholder="Add Answer"
            onChangeText={(e) => this.handleOnChange(e, 'answer')}
            value={this.state.answer} />
        </FieldSetView>
        <Button
          onPress={() => this.addCard(deckName)}
          disabled={buttonStateHolder}
          buttonStatus={buttonStateHolder}
        >
          <ButtonText>Submit</ButtonText>
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const { entryId } = navigation.state.params
  return { title: entryId }

}

export default connect(mapStateToProps)(AddCard)