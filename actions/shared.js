// API Functions
import { getDecks } from '../utils/api'

// Shared Action Creators
import { receiveDecks } from './decks'

// Handles sending the initial data to the Redux store
export const handleInitialData = () => {
  return (dispatch) => {
    return getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }
}