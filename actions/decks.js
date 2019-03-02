// Action Types
import { ADD_DECK, RECEIVE_DECKS } from "./types";

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