
import { REHYDRATE } from 'redux-persist/lib/constants'
import { all, take } from 'redux-saga/effects'
import watchAuth from './auth-saga'
import watchUser from './users-saga'

export default function* rootSaga() {
  yield take(REHYDRATE)
  yield all([
    watchAuth(),
    watchUser(),
  ])
}
