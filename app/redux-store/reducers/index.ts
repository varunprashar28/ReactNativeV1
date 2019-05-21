import { combineReducers } from 'redux'
import AuthReducers from './auth-reducer'
import UsersReducer from './users-reducer'

export default combineReducers({
  auth: AuthReducers,
  users: UsersReducer,
})
