// Action Types
import { ADD_CARD_TO_DECK } from "./types";

// Action Creators
export const addCard = (title, card) => {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  }
}