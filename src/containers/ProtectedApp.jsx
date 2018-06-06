import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import MyLayout from '../components/layout/MyLayout'

import IndexPage from '../pages/admin/IndexPage'
import NotFoundPage from '../pages/NotFoundPage'

import ProfilePage from '../pages/admin/ProfilePage'

export default function ProtectedApp() {
  return (
    <MyLayout>
      <Switch>
        <Route exact path="/admin" component={IndexPage} />

        <Route exact path="/admin/profile" component={ProfilePage} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </MyLayout>
  )
}
