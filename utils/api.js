import { AsyncStorage } from 'react-native'

import { getData } from '../utils/_DATA'

const DECKS_STORAGE_KEY = 'flashcards: decks'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      if (results === null) {
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(getData()))
        return getData()
      } else {
        return JSON.parse(results)
      }
    })
}

export function savedDeckTitle(title) {
  getDecks()
    .then((decks) => {
      console.log('DECKS! ===========> ', decks )
      return {
        ...decks,
        [title]: {
          title,
          questions: [],
        }
      }
    })
    .then((newDecks) => {
      console.log('NEW DECKS! ===========> ', newDecks )
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
    })
}