import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends React.Component {
  render() {
    return(
      <View>
        <Text>Quiz</Text>
      </View>
    )
  }
}

export default connect()(Quiz)