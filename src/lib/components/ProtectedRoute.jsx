import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isUserLoggedIn = () => {
  return true
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUserLoggedIn() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
    }
  />
)

export default ProtectedRoute
