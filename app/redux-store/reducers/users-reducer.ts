import { SIGNUP_SUCCESS, USERS_DATA } from '../../constants'

const INITIAL_STATE = {users: []}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, signup: true, users: action.users }
    case USERS_DATA:
      return { ...state, users: action.users }
    default:
      return state
  }
}
