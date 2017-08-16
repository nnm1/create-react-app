import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'

import Main from './Main'
import ProtectedRoute from '../components/ProtectedRoute'
import configureStore from '../stores/configureStore'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/auth/login" component={LoginPage} /> */}

          <ProtectedRoute component={Main} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
