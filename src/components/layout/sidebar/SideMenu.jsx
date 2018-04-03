import React from 'react'
import NavLink from 'react-router-dom/NavLink'

import { getMenu } from '../../../actions/menuActions'

function renderLink(link) {
  return (
    <li className="nav-item" key={link.to}>
      <NavLink
        exact={link.to === '/admin'}
        to={link.to}
        className="nav-link"
        activeClassName="active"
      >
        {link.label}

        {/* Sample badge */}
        {/* <span className="badge badge-pill badge-danger sidemenu-badge">1</span> */}
      </NavLink>
    </li>
  )
}

export default function SideMenu() {
  return (
    <nav className="nav flex-column sidemenu">
      {getMenu().map(link => renderLink(link))}
    </nav>
  )
}
