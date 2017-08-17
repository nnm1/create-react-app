import React from 'react'
import { Switch } from 'react-router-dom'

import Main from './Main'
import ProtectedRoute from '../components/ProtectedRoute'

const AppRouter = () => {
  return (
    <Switch>
      {/* <Route exact path="/auth/login" component={LoginPage} /> */}

      <ProtectedRoute component={Main} />
    </Switch>
  )
}

export default AppRouter
