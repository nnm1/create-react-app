import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MyLayout from '../components/ui/layout/MyLayout'
import NotFoundRoute from '../components/NotFoundRoute'

import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const Main = () => {
  return (
    <MyLayout>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/not-found" component={NotFoundPage} />
        <Route component={NotFoundRoute} />
      </Switch>
    </MyLayout>
  )
}

export default Main
