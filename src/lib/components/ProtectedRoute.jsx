import PropTypes from 'prop-types'
import React from 'react'
import Redirect from 'react-router-dom/Redirect'
import Route from 'react-router-dom/Route'

function renderOrRedirect(Component, redirector) {
  const redirectTo = redirector()

  const result = props => {
    if (redirectTo) {
      const { location } = props
      return (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: location },
          }}
        />
      )
    }
    return <Component {...props} />
  }
  result.propTypes = { location: PropTypes.string }
  result.defaultProps = { location: '' }
  return result
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

export default function ProtectedRoute({ component, redirector, ...props }) {
  return <Route {...props} render={renderOrRedirect(component, redirector)} />
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirector: PropTypes.func.isRequired,
}
