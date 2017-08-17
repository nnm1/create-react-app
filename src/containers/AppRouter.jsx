import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '../config/routes'
import ProtectedRoute from '../components/ProtectedRoute'
import ProtectedApp from './ProtectedApp'

const renderRoutes = () => {
  return routes.map(route => (
    <Route key={route.path} {...route} />
  ))
}

const AppRouter = () => {
  return (
    <Switch>
      {renderRoutes()}

      <ProtectedRoute component={ProtectedApp} />
    </Switch>
  )
}

export default AppRouter
