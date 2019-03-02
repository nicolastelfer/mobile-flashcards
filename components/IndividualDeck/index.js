import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class IndividualDeck extends React.Component {
  render() {
    const deckId = this.props.navigation.state.params.entryId
    console.log(deckId)
    return (
      <View style={styles.container}>
        <Text>This is the Individual Deck</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default IndividualDeck