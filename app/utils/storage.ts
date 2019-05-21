import AsyncStorage from '@react-native-community/async-storage'
import { isEmpty } from 'lodash'

const USER_TOKEN = 'USER_TOKEN'
export const setData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(`@${key}:key`, `${value}`)
    return true
  } catch (error) {
    return false
  }
}

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}:key`)
    if (!isEmpty(value)) {
      return value
    }
    return ''
  } catch (error) {
    return ''
  }
}

export const saveToken = async (value: string) => {
  try {
    await AsyncStorage.setItem(`@${USER_TOKEN}:key`, `${value}`)
    return true
  } catch (error) {
    return false
  }
}

export const clearToken = async () => saveToken('')

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(`@${USER_TOKEN}:key`)
    if (!isEmpty(value)) {
      return value
    }
    return ''
  } catch (error) {
    return ''
  }
}
