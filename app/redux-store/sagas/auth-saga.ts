
import { find } from 'lodash'
import { SagaIterator } from 'redux-saga'
import { all, call, put, select, takeEvery } from 'redux-saga/effects'
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGOUT_REQUESTING, LOGOUT_SUCCESS, SIGNUP_REQUESTING, SIGNUP_SUCCESS } from '../../constants'
import { ReduxAction, User } from '../../types'


const getUsers = (state: any) => state.users.users


function* watchSignupAsync(action: ReduxAction): SagaIterator {
  const {email, password} = action.params
  let users = yield select(getUsers)
  const user: User | undefined = find(users, (data: User) => data.email === email && data.password === password)
  if (user) {
    action.onError('User already exist')
  } else {
    if (users) {
      users.push(action.params)
    } else {
      users = [action.params]
    }
    yield put({ type: SIGNUP_SUCCESS, users})
    yield put({ type: LOGIN_SUCCESS, user: action.params, token: `$${email}rtu4t5grg` })
  }
}

function* watchLoginAsync(action: ReduxAction): SagaIterator {
  const {email, password} = action.params
  const users = yield select(getUsers)
  const user: User | undefined = find(users, (data: User) => data.email === email && data.password === password)
  if (!user) {
    action.onError('Incorrect username or password')
  } else {
    yield put({ type: LOGIN_SUCCESS, user, token: `$${email}rtu4t5grg` })
  }
}

function* watchLogoutAsync(): SagaIterator {
  yield put({ type: LOGOUT_SUCCESS})
}

export default function* rootSaga() {
  yield all([
    takeEvery(SIGNUP_REQUESTING, watchSignupAsync),
    takeEvery(LOGIN_REQUESTING, watchLoginAsync),
    takeEvery(LOGOUT_REQUESTING, watchLogoutAsync),
  ])
}
