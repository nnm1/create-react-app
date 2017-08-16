import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Main from './Main'
import ProtectedRoute from '../components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/auth/login" component={LoginPage} /> */}

        <ProtectedRoute component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
