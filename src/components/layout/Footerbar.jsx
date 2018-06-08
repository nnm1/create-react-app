import React from 'react'
import NavLink from 'react-router-dom/NavLink'

function FooterLink({ to, exact, children }) {
  return (
    <NavLink className="nav-item nav-link position-relative" to={to} exact={exact}>
      {children}
    </NavLink>
  )
}

function FooterBadge({ children }) {
  return (
    <span
      className="badge badge-pill badge-danger position-absolute"
      style={{ top: '0.25rem' }}
    >
      {children}
    </span>
  )
}

export default function Footerbar() {
  return (
    <footer className="fixed-bottom bg-light d-lg-none">
      <nav className="nav nav-pills nav-fill">
        <FooterLink to="/admin" exact>
          Main
        </FooterLink>
        <FooterLink to="/admin/profile">Profile</FooterLink>
        <FooterLink to="/admin/nav1">
          Nav 1
          <FooterBadge>1</FooterBadge>
        </FooterLink>
        <FooterLink to="/admin/menu">Menu</FooterLink>
      </nav>
    </footer>
  )
}
