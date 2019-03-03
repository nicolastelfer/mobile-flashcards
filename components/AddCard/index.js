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

import { addCard } from "../../actions/cards";
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
      .then(() => {
        navigation.dispatch(NavigationActions.back({ key: null }))
      })
  }

  handleOnChange = () => {

    const { answer, question } = this.state

    if (question !== '' && answer !== '') {
      this.setState({ buttonStateHolder: false })
    } else {
      this.setState({ buttonStateHolder: true })
    }
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
            onChangeText={(question) => this.handleOnChange(this.setState({ question: question }))}
            value={this.state.question} />
        </FieldSetView>
        <FieldSetView>
          <Label>Answer</Label>
          <Input
            placeholder="Add Answer"
            onChangeText={(answer) => this.handleOnChange(this.setState({ answer: answer }))}
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