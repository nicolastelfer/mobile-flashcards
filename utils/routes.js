import React from 'react'
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {Platform} from 'react-native'

// Imports helpers
import {themeColorLight, themeColorPrimary, themeColorSecondary} from './helpers'

// Imports Components
import Quiz from '../components/Quiz'
import AddCard from '../components/AddCard'
import AddDeck from '../components/AddDeck'
import IndividualDeck from '../components/IndividualDeck'
import DeckDashboard from '../components/DeckDashboard'

// Imports Material UI icons
import { MaterialIcons } from '@expo/vector-icons'

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

export default MainNavigator