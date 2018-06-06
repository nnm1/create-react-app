import React from 'react'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'

function isUserLoggedIn() {
  return true
}

export default function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
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
}
