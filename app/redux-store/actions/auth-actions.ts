import { LOGIN_REQUESTING, LOGOUT_REQUESTING, SIGNUP_REQUESTING } from '../../constants'
import { User } from '../../types'

export const loginRequest = (params: User, onError: () => string) => ({
  type: LOGIN_REQUESTING,
  params,
  onError,
})

export const signUpRequest = (params: User, onError: () => string) => ({
  type: SIGNUP_REQUESTING,
  params,
  onError,
})

export const logoutRequest = () => ({
  type: LOGOUT_REQUESTING,
})
