import React from 'react'
import { Button, Text, TextInput, StyleSheet, View } from 'react-native'

import { savedDeckTitle } from '../../utils/api'
import { addDeck } from '../../actions/decks'

class AddDeck extends React.Component {

  state = {
    text: 'Add name'
  }

  handleInput = (text) => {
    this.setState({ text: text})

    // const { dispatch, loginUser } = this.props
    //
    // dispatch(handleAddQuestion(optionOne, optionTwo, loginUser))
    //   .then(() =>
    //     // Is there something that should be checked for setting toHome?
    //     this.setState({ text: text})
    //   )
  }

  addName = () => {
    const { text } = this.state
    savedDeckTitle(text)
    //this.props.dispatch(addDeck(text))
    //this.props.navigation.navigate('DeckView')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Deck name:</Text>

        <TextInput style={{height: 40, width: 100, borderColor: 'gray', padding: 10, marginTop: 20, borderWidth: 1}} onChange={(text) => this.handleInput(text)} value={this.state.text} />
        <Button onPress={this.addName} title='submit' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AddDeck