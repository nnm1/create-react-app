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

export default function Menu() {
  return (
    <React.Fragment>
      {/* Group 1 */}
      <Nav>
        <a className="nav-link disabled">Group 1</a>

        <MenuLink to="/admin" exact>
          Main
        </MenuLink>
        <MenuLink to="/admin/profile">Profile</MenuLink>
        <MenuLink to="/admin/nav1">Nav 1</MenuLink>
      </Nav>

      {/* Group 2 */}
      <Nav>
        <a className="nav-link disabled">Group 2</a>

        <MenuLink to="/admin/nav2">Nav 2</MenuLink>
        <MenuLink to="/admin/nav3">Nav 3</MenuLink>
        <MenuLink to="/admin/nav4">Nav 4</MenuLink>
      </Nav>

      {/* Group 3 */}
      <Nav>
        <a className="nav-link disabled">Group 3</a>

        <MenuLink to="/admin/nav5">Nav 5</MenuLink>
        <MenuLink to="/admin/nav6">Nav 6</MenuLink>
        <MenuLink to="/admin/nav7">Nav 7</MenuLink>
        <MenuLink to="/admin/nav8">Nav 8</MenuLink>
      </Nav>
    </React.Fragment>
  )
}
