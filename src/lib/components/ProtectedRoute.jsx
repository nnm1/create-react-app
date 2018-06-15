import PropTypes from 'prop-types'
import React from 'react'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'

const redirectUnauthorizedTo = '/login'

function isUserLoggedIn() {
  return true
}

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isUserLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectUnauthorizedTo,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired
}
