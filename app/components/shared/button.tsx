import React from 'react'
import { FlexStyle, GestureResponderEvent, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { PrimaryColor } from '../../constants'

interface ButtonType {
  buttonStyle?: ViewStyle
  textStyle?: TextStyle
  disabled?: boolean
  onPress: (event?: GestureResponderEvent) => any,
  children: string | Element
  icon?: boolean
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 2,
    backgroundColor: PrimaryColor,
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: '8%',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Button = ({ buttonStyle, textStyle, disabled, onPress, children, icon }: ButtonType) => {
  const { buttonContainer, buttonTextStyle } = styles
  return (
    <TouchableOpacity style={[buttonContainer, buttonStyle]} onPress={onPress} accessibilityRole='button' disabled={disabled} >
      {icon ? children : <Text style={[buttonTextStyle, textStyle]}>
        {children}
      </Text>}
    </TouchableOpacity>
  )
}


