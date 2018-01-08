import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexPage from '../pages/IndexPage'
import NotFoundPage from '../pages/NotFoundPage'

import ProtectedRoute from '../lib/components/ProtectedRoute'
import ProtectedApp from './ProtectedApp'

const ClientApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={IndexPage} />

      <ProtectedRoute path="/admin" component={ProtectedApp} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default ClientApp
