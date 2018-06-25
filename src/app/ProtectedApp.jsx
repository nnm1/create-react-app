import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import App from '../components/layout/App'

import IndexPage from '../pages/admin/Index'
import MenuPage from '../pages/admin/Menu'
import NotFoundPage from '../pages/admin/NotFound'
import ProfilePage from '../pages/admin/Profile'

export default function ProtectedApp() {
  return (
    <App>
      <Switch>
        <Route exact path="/admin/menu" component={MenuPage} />

        <Route exact path="/admin" component={IndexPage} />
        <Route exact path="/admin/profile" component={ProfilePage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </App>
  )
}
