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
      const { question, answer, deck, correctAnswer } = action.card
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [...state[deck].questions, { question, answer, correctAnswer }]
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