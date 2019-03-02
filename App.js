import React from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { themeColorPrimary, themeColorSecondary } from './utils/helpers'

// Imports Components
import DeckDashboard from './components/DeckDashboard'
import AddDeck from './components/AddDeck'
import IndividualDeck from './components/IndividualDeck'

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
      backgroundColor: Platform.OS === 'ios' ? 'white' : 'blue'
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
      title: `${navigation.state.params.name}'s Deck'`,
    })
  }
})

// Wraps the tabs and the stack navigation inside a container (new in ReactNavigation 3.0)
const MainNavigator = createAppContainer(StackNavigator)

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <View style={{ height: 20, flex: 1, backgroundColor: 'green' }}>
          <MainNavigator/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
