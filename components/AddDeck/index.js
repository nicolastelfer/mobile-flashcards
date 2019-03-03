import React from 'react'
import {  StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import {
  Button,
  ButtonText,
  ContainerView,
  Input,
  Label,
 } from '../../utils/styles'

import { savedDeckTitle } from '../../utils/api'
import { addDeck } from '../../actions/decks'

class AddDeck extends React.Component {

  state = {
    buttonStateHolder: true,
    text: ''
  }

  addName = () => {
    const { text } = this.state

    const { dispatch } = this.props

    savedDeckTitle(text)

    dispatch(addDeck(text))

    this.props.navigation.navigate('IndividualDeck', { entryId: text })

    this.setState({ text: '' })

  }

  handleOnChange = (text) => {

    this.setState({
      buttonStateHolder: (text.length > 0 ? false : true),
      text: text
    })
  }

  render() {
    const { text, buttonStateHolder } = this.state
    return (
      <ContainerView>
        <Label>Write your Deck's name</Label>

        <Input
          placeholder="Add deck name"
          onChangeText={this.handleOnChange}
          value={text} />
        <Button
          onPress={this.addName}
          disabled={buttonStateHolder}
          buttonStatus={buttonStateHolder}
        >
          <ButtonText>Submit</ButtonText>
        </Button>
      </ContainerView>
    )
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(AddDeck)