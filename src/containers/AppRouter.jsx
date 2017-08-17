import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ProtectedApp from './ProtectedApp'
import ProtectedRoute from '../components/ProtectedRoute'

import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage} />

      {/* Render 404 page */}
      <Route exact path="/notfound" component={NotFoundPage} />

      <ProtectedRoute component={ProtectedApp} />
    </Switch>
  )
}

export default AppRouter
