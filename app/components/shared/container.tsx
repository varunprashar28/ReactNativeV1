import React from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Loader } from './loader'

export const Container = ({ children, style, loading = false }: { children: any, style?: any, loading?: boolean }) => {
  return (
    <ScrollView contentContainerStyle={[{ flexGrow: 1 }, style]}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
          {children}
          <Loader loading={loading} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
