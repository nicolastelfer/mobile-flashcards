import React from 'react'
import { NavigationActions } from 'react-navigation'
import { TextInput, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import { themeColorPrimary, themeColorSecondary, themeColorLight } from '../../utils/helpers'

import { addCard } from "../../actions/cards";
import { addCardToDeck } from '../../utils/api'

class AddCard extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  addCard = (title) => {
    const { question, answer } = this.state
    const { dispatch, navigation } = this.props

    const card = {
      question,
      answer
    }

    dispatch(addCard(title, { question, answer }))

    addCardToDeck(title, card)

    this.setState({ question: '', answer: '' })

    navigation.dispatch(NavigationActions.back({ key: null }))
  }

  render() {
    const deckName = this.props.navigation.state.params.entryId
    return(
      <KeyboardAvoidingView style={styles.container} behaviour='padding'>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.label}>Question</Text>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <TextInput placeholder="Add Question" style={styles.input} onChangeText={(question) => this.setState({ question })} value={this.state.question} />
        </View>
        <View style={{ flexDirection: 'row'}}>
          <Text style={styles.label}>Answer</Text>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <TextInput placeholder="Add Answer" style={styles.input} onChangeText={(answer) => this.setState({ answer })} value={this.state.answer} />
        </View>
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => this.addCard(deckName)}
          >
            <Text style={{ color: themeColorLight }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: themeColorPrimary,
    height: 40,
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    width: 150,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    padding: 10,
    marginTop: 20,
    borderWidth: 1
  },
  label: {
    flex: 0.8,
    fontSize: 20,
    fontWeight: '500',
    color: themeColorSecondary,
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'center'
  }
})

function mapStateToProps({ decks }, { navigation }) {
  const { entryId } = navigation.state.params
  return { title: entryId }

}

export default connect(mapStateToProps)(AddCard)