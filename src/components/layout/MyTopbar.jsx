import React from 'react'
import Link from 'react-router-dom/Link'
import NavLink from 'react-router-dom/NavLink'

export default function MyTopbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top bg-primary topbar">
      <span className="navbar-brand mr-auto">
        <img
          src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
          width="25"
          height="25"
          alt=""
        />
      </span>

      <nav className="navbar-nav">
        <NavLink className="nav-link" to="/admin/profile">
          Profile
        </NavLink>
        <Link className="nav-link" to="/logout">
          Logout
        </Link>
      </nav>
    </nav>
  )
}
