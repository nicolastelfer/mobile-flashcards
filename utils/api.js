import { AsyncStorage } from 'react-native'

import { getData } from '../utils/_DATA'

import { DECKS_STORAGE_KEY } from './helpers'

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
      return {
        ...decks,
        [title]: {
          title,
          questions: [],
        }
      }
    })
    .then((newDecks) => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
    })
}

export function addCardToDeck (title, card) {
  getDecks()
    .then((decks) => {
      return {
        ...decks,
        [title]: {
          title,
          questions: decks[title].questions.concat([card])
        }
      }
    })
    .then((newDecks) => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))
      return newDecks
    })
}

export function removeFromDeck (deck) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const decks = JSON.parse(results)
    delete decks[deck]

    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  })
}