import React from 'react'
import NavLink from 'react-router-dom/NavLink'

import { getMenu } from '../../actions/menuActions'

function Link({ link }) {
  return (
    <li className="nav-item" key={link.to}>
      <NavLink exact={link.to === '/admin'} to={link.to} className="nav-link">
        {link.label}

        {/* Sample badge */}
        {/* <span className="badge badge-pill badge-danger footerbar-badge">1</span> */}
      </NavLink>
    </li>
  )
}

export default function MyFooterbar() {
  return (
    // <nav className="nav justify-content-around align-items-center footerbar">
    //   {getMenu().map(link => <Link link={link} />)}
    // </nav>
    null
  )
}
