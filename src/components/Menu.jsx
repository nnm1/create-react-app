import React from 'react'
import NavLink from 'react-router-dom/NavLink'

function Nav({ children }) {
  return <nav className="nav nav-pills flex-column mb-3">{children}</nav>
}

function MenuLink({ to, exact, children }) {
  return (
    <NavLink className="nav-link" to={to} exact={exact}>
      {children}
    </NavLink>
  )
}

function MenuBadge({ children }) {
  return (
    <span
      className="badge badge-pill badge-danger float-right"
      style={{ marginTop: '3px' }}
    >
      {children}
    </span>
  )
}

export default function Menu() {
  return (
    <React.Fragment>
      {/* Group 1 */}
      <Nav>
        <span className="nav-link disabled">Group 1</span>

        <MenuLink to="/admin" exact>
          Main
        </MenuLink>
        <MenuLink to="/admin/profile">Profile</MenuLink>
        <MenuLink to="/admin/nav1">
          Nav 1
          <MenuBadge>1</MenuBadge>
        </MenuLink>
      </Nav>

      {/* Group 2 */}
      <Nav>
        <span className="nav-link disabled">Group 2</span>

        <MenuLink to="/admin/nav2">Nav 2</MenuLink>
        <MenuLink to="/admin/nav3">Nav 3</MenuLink>
        <MenuLink to="/admin/nav4">Nav 4</MenuLink>
      </Nav>
    </React.Fragment>
  )
}
