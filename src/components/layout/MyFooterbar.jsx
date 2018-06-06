import React from 'react'
import NavLink from 'react-router-dom/NavLink'

function FooterLink({ to, exact, children }) {
  return (
    <NavLink className="nav-item nav-link" to={to} exact={exact}>
      {children}
    </NavLink>
  )
}

export default function MyFooterbar() {
  return (
    <div className="fixed-bottom bg-light d-lg-none footerbar">
      <nav className="nav nav-pills nav-fill">
        <FooterLink to="/admin" exact>
          Main
        </FooterLink>
        <FooterLink to="/admin/profile">Profile</FooterLink>
        <FooterLink to="/admin/nav1">Nav 1</FooterLink>
        <FooterLink to="/admin/menu">Menu</FooterLink>
      </nav>
    </div>
  )
}
