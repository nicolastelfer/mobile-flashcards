/**
 * Helpers
 */
// Imports
import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

// Colors
export const themeColorLight = '#FFFFFF'
export const themeColorPrimary = '#483D8B'
export const themeColorSecondary = '#6A5ACD'
export const themeColorTertiary = '#E6E6FA'

export const themeColorGreyPrimary = '#D3D3D3'
export const themeColorGreySecondary = '#708090'
export const themeColorGreyTertiary = '#696969'

// Storage Key
export const DECKS_STORAGE_KEY = 'flashcards: decks'

// Local Notifications
const NOTIFICATION_KEY = 'flashcards: notifications'

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function createNotification() {
  return {
    title: 'Complete a quiz!',
    body: 'It is time for another quiz!',
    ios: {
      sound: true
    }
  }
}

/**
 * Set Local Notification
 * This method will check if we have set a local notification
 * If we haven't and permission is granted, we schedule a new notification for tomorrow
 */
export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate())
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}