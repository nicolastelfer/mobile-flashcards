import React from 'react'
import {Text, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import IndividualDeck from "../IndividualDeck"

import { handleInitialData } from "../../actions/shared"

class DeckDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { decks } = this.props

    return (
      <ScrollView style={styles.container}>
        {
          Object.keys(decks).map((deck) => {
            const { title, questions } = decks[deck]
              return (
                <View key={deck}>
                  <Text>{title}</Text>
                  <Text>{questions.length}</Text>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('IndividualDeck', { entryId: deck })}
                  >
                    <Text>View Deck</Text>
                  </TouchableOpacity>
                </View>
              )
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})

function mapStateToProps(decks) {
  return decks
}

export default connect(mapStateToProps)(DeckDashboard)
