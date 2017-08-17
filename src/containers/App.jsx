import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from '../stores/configureStore'
import AppRouter from './AppRouter'

const store = configureStore(window.__INITIAL_STATE__)

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default App
