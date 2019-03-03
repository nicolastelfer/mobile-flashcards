import React from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
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

const styles = StyleSheet.create({
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
  input: {
    height: 40, width: 100, borderColor: 'gray', padding: 10, marginTop: 20, borderWidth: 1
  }
})

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(AddDeck)