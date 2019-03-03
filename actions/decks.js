// Action Types
import { ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from "./types";

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

export function removeDeck(deck) {
  return {
    type: REMOVE_DECK,
    deck
  }
}