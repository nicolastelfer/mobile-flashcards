import { ADD_DECK, ADD_CARD_TO_DECK, RECEIVE_DECKS} from "../actions/types"

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
    default :
      return state
  }
}

export default decks