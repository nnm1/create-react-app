import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './Main'
import ProtectedRoute from '../components/ProtectedRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
