// Action Types
import { ADD_DECK, ADD_CARD_TO_DECK, RECEIVE_DECKS } from "./types";

// Action Creators
export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck
  }
}

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export const addCardToDeck = (card) => {
  return {
    type: ADD_CARD_TO_DECK,
    card
  }
}