import React from 'react'
import { Button, Text, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native'

import { getData } from '../../utils/_DATA'
import IndividualDeck from "../IndividualDeck";

class DeckDashboard extends React.Component {
  render() {
    const decks = getData()
    return (
      <View style={styles.container}>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})

export default DeckDashboard
