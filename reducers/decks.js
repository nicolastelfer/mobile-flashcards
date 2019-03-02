import { ADD_DECK, ADD_CARD_TO_DECK, RECEIVE_DECKS} from "../actions/types"

function decks (state = {}, action) {
  switch (action.type) {
    case ADD_DECK :
      let { deck } = action
      return {
        ...state,
        [action.decks]: {
          ...state.decks,
          title: deck
        }
      }
    case ADD_CARD_TO_DECK :
      const { question, answer, correctAnswer } = action.card
      return {
        ...state,
        decks: {
          ...state.decks,
          questions: [...state[action].questions, { question, answer, correctAnswer }]
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