import React from 'react'
import { FlexStyle, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create ({
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#a61c00',
  },
})

interface ErrorTextType {
  style?: FlexStyle
  children: string | undefined
}

export const ErrorText = ({ style, children }: ErrorTextType) => {
  const { textStyle } = styles
  return (<View style={[{ justifyContent: 'center' }, style]}>
    <Text style={textStyle}>{children}</Text>
  </View>)
}
