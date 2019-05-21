import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'


// Middleware
const sagaMiddleware = createSagaMiddleware()

const middleware: any = [sagaMiddleware]

// if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
// }

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleware))
  const persistor = persistStore(store)
  // run the saga
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}
