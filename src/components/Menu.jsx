import React from 'react'
import NavLink from 'react-router-dom/NavLink'

export default function Menu() {
  return (
    <nav className="menunav">
      <div className="mb-6">
        <MenuHeader>MENU 1</MenuHeader>
        <ul>
          <MenuLink exact={true} to="/admin">
            Main
            <MenuBadge>2</MenuBadge>
          </MenuLink>
          <MenuLink to="/admin/item1">Menu Item 1</MenuLink>
        </ul>
      </div>

      <div className="mb-6">
        <MenuHeader>MENU 2</MenuHeader>
        <ul>
          <MenuLink to="/admin/item2">Menu Item 2</MenuLink>
          <MenuLink to="/admin/item3">Menu Item 3</MenuLink>
          <MenuLink to="/admin/item4">Menu Item 4</MenuLink>
        </ul>
      </div>
    </nav>
  )
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

function MenuHeader({ children }) {
  return <p className="mb-3 text-grey font-bold text-sm">{children}</p>
}

function MenuLink({ exact, to, children }) {
  return (
    <li className="mb-1">
      <NavLink
        className="block relative py-1 text-grey-dark hover:text-black"
        exact={exact}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  )
}

function MenuBadge({ children }) {
  return (
    <span
      className="absolute pin-r px-2 rounded-full bg-red text-sm text-white"
      style={{ top: '0.25rem', bottom: '0.25rem' }}
    >
      {children}
    </span>
  )
}
