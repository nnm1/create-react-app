import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import IndexPage from '../pages/Index'
import NotFoundPage from '../pages/NotFound'

import ProtectedRoute from '../lib/components/ProtectedRoute'
import ProtectedApp from './ProtectedApp'

function userRedirector() {
  // if (currentUser.isLoggedIn()) {
  //   return ''
  // }
  // return '/login'
  return ''
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />

        <ProtectedRoute
          path="/admin"
          component={ProtectedApp}
          redirector={userRedirector}
        />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}
