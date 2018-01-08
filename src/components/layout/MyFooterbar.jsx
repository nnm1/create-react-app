import React from 'react'
import NavLink from 'react-router-dom/NavLink'

import menu from '../../lib/menu'

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
      {/* <span className="badge badge-pill badge-danger footerbar-badge">1</span> */}
    </NavLink>
  </li>
)

const MyFooterbar = () => (
  <nav className="nav justify-content-around align-items-center footerbar">
    {menu.map(link => renderLink(link))}
  </nav>
)

export default MyFooterbar
