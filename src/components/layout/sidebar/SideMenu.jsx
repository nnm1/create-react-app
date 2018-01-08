import React from 'react'
import NavLink from 'react-router-dom/NavLink'

import menu from '../../../lib/menu'

const renderLink = link => (
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

const SideMenu = () => (
  <nav className="nav flex-column sidemenu">
    {menu.map(link => renderLink(link))}
  </nav>
)

export default SideMenu
