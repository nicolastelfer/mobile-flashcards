import { getData } from '../utils/_DATA'

export function getDecks(deck) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      if (results === null) {
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(getData()))
        return getData()
      } else {
        return JSON.parse(results)
      }
    })
}

export function savedDeckTitle(title) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}