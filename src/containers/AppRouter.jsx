import React from 'react'
import { Switch, Route } from 'react-router-dom'

import IndexPage from '../pages/IndexPage'
import ProtectedRoute from '../components/ProtectedRoute'
import ProtectedApp from './ProtectedApp'
import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={IndexPage} />

      <ProtectedRoute path="/admin" component={ProtectedApp} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  )
}

export default AppRouter
