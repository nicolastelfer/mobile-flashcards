// API Functions
import { getDecks } from '../utils/api'

import { showLoading, hideLoading } from 'react-redux-loading'

// Shared Action Creators
import { addDeck, addCardToDeck, receiveDecks } from './decks'

// Handles sending the initial data to the Redux store
export const handleInitialData = () => {
  return (dispatch) => {
    return getDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
  }
}

export const handleAddDeck = (title) => {
  return (dispatch) => {
    dispatch(showLoading())
    return dispatch(addDeck(title))
      .then((question) => {
          //dispatch(addQuestion(loginUser, question.question.id))
          dispatch(hideLoading())
        }
      )
  }
}