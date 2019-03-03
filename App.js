import React from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { themeColorPrimary, themeColorSecondary, themeColorLight } from './utils/helpers'

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
  DeckDashboard: {
    screen: DeckDashboard,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='view-agenda' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
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
  DeckDashboard: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard'
    })
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.entryId}'s Deck'`,
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    }
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
        <View style={{  flex: 1 }}>
          <View style={styles.container}>
            <MainNavigator/>
          </View>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColorLight,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  }
})
