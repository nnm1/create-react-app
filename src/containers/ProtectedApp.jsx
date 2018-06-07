import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Page from '../components/layout/Page'

import IndexPage from '../pages/admin/IndexPage'
import ProfilePage from '../pages/admin/ProfilePage'
import MenuPage from '../pages/admin/MenuPage'

import NotFoundPage from '../pages/admin/NotFoundPage'

export default function ProtectedApp() {
  return (
    <Page>
      <Switch>
        <Route exact path="/admin" component={IndexPage} />
        <Route exact path="/admin/profile" component={ProfilePage} />
        <Route exact path="/admin/menu" component={MenuPage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Page>
  )
}
