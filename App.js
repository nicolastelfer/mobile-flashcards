import React from 'react'
import {
  AppView,
  AppContainerView,
} from './utils/styles'

// Redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import middleware from './middleware'

import { setLocalNotification } from './utils/helpers'

// Imports Components, Material UI, Tabs, Routes
import MainNavigator from './utils/routes'

// Create the Redux Store using the defined Root Reducer and Middleware function(s)
const store = createStore(reducer, middleware)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <AppView>
          <AppContainerView>
            <MainNavigator/>
          </AppContainerView>
        </AppView>
      </Provider>
    )
  }
}
