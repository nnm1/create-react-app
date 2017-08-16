import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import userStore from '../stores/userStore'

const ProtectedRoute = ({ component: Component, ...restProps }) => {
  return (
    <Route {...restProps} render={props => (
      userStore.isLoggedIn() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: '/auth/login',
            state: { from: props.location }
          }} />
        )
    )} />
  )
}

export default ProtectedRoute
