import React from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { themeColorPrimary, themeColorSecondary, themeColorLight } from './utils/helpers'
import {
  AppView,
  AppContainerView,
} from './utils/styles'

// Redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import middleware from './middleware'

import { setLocalNotification } from "./utils/helpers"

// Imports Components
import DeckDashboard from './components/DeckDashboard'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import IndividualDeck from './components/IndividualDeck'
import Quiz from './components/Quiz'

// Imports Material UI icons
import { MaterialIcons } from '@expo/vector-icons'

// Creates each tab
const Tabs = createBottomTabNavigator({
  Home: {
    screen: DeckDashboard,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='view-agenda' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add Deck',
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add-box' size={30} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: themeColorPrimary,
    style: {
      height: 50,
      backgroundColor: Platform.OS === 'ios' ? themeColorLight : themeColorSecondary
    }
  }
})

// Creates the stack navigator between screen views
const StackNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Your Decks',
      headerTintColor: themeColorLight,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: themeColorPrimary
      }
    }
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.entryId}'s Deck'`,
      headerTintColor: themeColorLight,
      headerStyle: {
        backgroundColor: themeColorPrimary
      }
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: themeColorLight,
      headerStyle: {
        backgroundColor: themeColorPrimary
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: themeColorLight,
      headerStyle: {
        backgroundColor: themeColorPrimary
      }
    }
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTintColor: themeColorPrimary,
    headerTitleStyle: {
      fontSize: 22
    }
  },
  cardStyle: {
    backgroundColor: themeColorLight
  }
})

// Wraps the tabs and the stack navigation inside a container (new in ReactNavigation 3.0)
const MainNavigator = createAppContainer(StackNavigator)

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
