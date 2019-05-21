import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_SUCCESS } from '../../constants'
const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, login: true, token: action.token, user: action.user }
    case LOGIN_FAIL:
      return { ...state, login: false }
    case LOGOUT_SUCCESS:
      return INITIAL_STATE
    default:
      return state
  }
}
