import PropTypes from 'prop-types'
import React from 'react'
import NavLink from 'react-router-dom/NavLink'

export default function Footerbar() {
  return (
    <ul className="lg:hidden fixed h-10 pin-b pin-x z-100 flex bg-grey-lighter footer">
      <FooterLink exact to="/admin">
        MAIN
        <FooterBadge>2</FooterBadge>
      </FooterLink>
      <FooterLink to="/admin/item2">ITEM 2</FooterLink>
      <FooterLink to="/admin/menu">MENU</FooterLink>
    </ul>
  )
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

function FooterLink({ exact, to, children }) {
  return (
    <li className="flex-1">
      <NavLink
        className="block relative h-full py-3 px-4 text-sm text-grey-dark text-center"
        exact={exact}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  )
}

FooterLink.propTypes = {
  exact: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.node,
}
FooterLink.defaultProps = {
  exact: false,
  to: '',
  children: null,
}

function FooterBadge({ children }) {
  return (
    <span
      className="absolute px-2 rounded-full bg-red text-sm text-white"
      style={{ top: '0.5rem', right: '0.5rem' }}
    >
      {children}
    </span>
  )
}

FooterBadge.propTypes = { children: PropTypes.node }
FooterBadge.defaultProps = { children: null }
