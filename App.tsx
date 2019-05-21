/**
 * TEB React Native App
 * @format
 */

import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigator from './app/app-navigation'
import store from './app/redux-store/configure-store'

class App extends React.Component {

  render() {
    return (
      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
