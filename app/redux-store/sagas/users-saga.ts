import { groupBy, map, mapValues } from 'lodash'
import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { GET_USERS, USERS_DATA } from '../../constants'
import { ReduxAction } from '../../types'

function* watchGetUsersAsync(action: ReduxAction): SagaIterator {
  // API call pending
  // Using test data
  yield put({ type: USERS_DATA })
}

export default function* rootSaga() {
  yield all([
    takeEvery(GET_USERS, watchGetUsersAsync),
  ])
}

