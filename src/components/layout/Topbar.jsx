import React from 'react'
import Link from 'react-router-dom/Link'
import NavLink from 'react-router-dom/NavLink'
import withRouter from 'react-router-dom/withRouter'

function DefaultHeader() {
  return null
}

function DefaultActions() {
  return (
    <nav className="navbar-nav">
      <NavLink className="nav-link" to="/admin/profile">
        Profile
      </NavLink>
      <Link className="nav-link" to="/logout">
        Logout
      </Link>
    </nav>
  )
}

function Topbar({ back, header, children, history }) {
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top bg-primary topbar">
      <div className="container">
        {/* Back button */}
        {back && (
          <nav className="navbar-nav mr-1">
            <button
              type="button"
              className="btn btn-link nav-link border-0"
              onClick={() => history.goBack()}
            >
              ◀
            </button>
          </nav>
        )}
        {/* Header */}
        <span className="navbar-brand mr-auto">{header || <DefaultHeader />}</span>
        {/* Actions */}
        {children || <DefaultActions />}
      </div>
    </nav>
  )
}

export default withRouter(Topbar)
