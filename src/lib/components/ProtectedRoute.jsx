import PropTypes from 'prop-types'
import React from 'react'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'

export default function ProtectedRoute({ component, redirector, ...props }) {
  return <Route {...props} render={renderOrRedirect(component, redirector)} />
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirector: PropTypes.func.isRequired,
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

function renderOrRedirect(Component, redirector) {
  const redirectTo = redirector()

  return props =>
    redirectTo ? (
      <Redirect
        to={{
          pathname: redirectTo,
          state: { from: props.location },
        }}
      />
    ) : (
      <Component {...props} />
    )
}
