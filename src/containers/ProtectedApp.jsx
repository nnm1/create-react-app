import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MyLayout from '../components/ui/layout/MyLayout'
import NotFoundRoute from '../components/NotFoundRoute'

import IndexPage from '../pages/IndexPage'
import ProfilePage from '../pages/settings/ProfilePage'

const ProtectedApp = () => {
  return (
    <MyLayout>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/settings/profile" component={ProfilePage} />

        <Route component={NotFoundRoute} />
      </Switch>
    </MyLayout>
  )
}

export default ProtectedApp
