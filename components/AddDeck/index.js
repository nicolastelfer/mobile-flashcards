import React from 'react'
import { Button, Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { savedDeckTitle } from '../../utils/api'
import { addDeck } from '../../actions/decks'

class AddDeck extends React.Component {

  state = {
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

  render() {
    const { text } = this.state
    return (
      <View style={styles.container}>
        <Text>Deck name:</Text>

        <TextInput placeholder="Add deck name" style={styles.input} onChangeText={(text) => this.setState({ text: text })} value={text} />
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={this.addName}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
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