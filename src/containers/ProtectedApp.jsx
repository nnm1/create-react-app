import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MyLayout from '../components/layout/MyLayout'

import IndexPage from '../pages/admin/IndexPage'
import NotFoundPage from '../pages/NotFoundPage'

import SettingsPage from '../pages/admin/SettingsPage'
import ProfilePage from '../pages/admin/settings/ProfilePage'

const ProtectedApp = () => (
  <MyLayout>
    <Switch>
      <Route exact path="/admin" component={IndexPage} />

      <Route exact path="/admin/settings" component={SettingsPage} />
      <Route exact path="/admin/settings/profile" component={ProfilePage} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  </MyLayout>
)

export default ProtectedApp
