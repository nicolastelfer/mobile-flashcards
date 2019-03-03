import React from 'react'
import {Text, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import IndividualDeck from "../IndividualDeck"

import { handleInitialData } from "../../actions/shared"

import {
  ButtonText,
  DeckCardView,
  DeckCardTitleView,
  DeckCardButtonView,
  TitleH3,
  TitleH4 } from '../../utils/styles'

const DeckCard = ({ deck, title, questions, props }) => {
  return (
    <DeckCardView>
      <DeckCardTitleView>
        <TitleH3>{title}</TitleH3>
        <TitleH4>{questions.length}</TitleH4>
      </DeckCardTitleView>
      <DeckCardButtonView onPress={() => props.navigation.navigate('IndividualDeck', { entryId: deck })}>
        <ButtonText>Go!</ButtonText>
      </DeckCardButtonView>
    </DeckCardView>
  )
}

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
              <DeckCard key={deck} deck={deck} title={title} questions={questions} props={this.props} />
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
