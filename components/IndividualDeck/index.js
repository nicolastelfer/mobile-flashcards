import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class IndividualDeck extends React.Component {
  render() {
    const name = this.props.navigation.state.params.entryId
    const { decks } = this.props

    console.log('IN VIEW ============> ', name)
    console.log('IN VIEW ============> ', decks[name])
    return (
      <View style={styles.container}>
        <Text>{decks[name].title}</Text>
        <Text>{decks[name].questions.length}</Text>
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

function mapStateToProps({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(IndividualDeck)