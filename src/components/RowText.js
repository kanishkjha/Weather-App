import React from 'react'
import { View, Text } from 'react-native'

export default function RowText(props) {
  const {
    containerStyles,
    messageOne,
    messageTwo,
    messageOneStyles,
    messageTwoStyles
  } = props
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}
