import { ADD_DECK, ADD_CARD_TO_DECK, RECEIVE_DECKS, REMOVE_DECK } from "../actions/types"

function decks (state = {}, action) {
  switch (action.type) {
    case ADD_DECK :
      const newDeck = {
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      }
      return {
        ...state,
        ...newDeck
      }
    case ADD_CARD_TO_DECK :
      const { title, card } = action

      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, card]
        }
      }
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case REMOVE_DECK :
      const decks = { ...state }
      delete decks[action.title]
      return {
        ...decks
      }
    default :
      return state
  }
}

export default decks