import React from 'react'

import NavLink from 'react-router-dom/NavLink'

function Sidenav({ children }) {
  return <nav className="nav nav-pills flex-column mb-3">{children}</nav>
}

function SidenavLink({ to, exact, children }) {
  return (
    <NavLink className="nav-link" to={to} exact={exact}>
      {children}
    </NavLink>
  )
}

export default function MySidebar() {
  return (
    <div className="sidebar sticky-top">
      {/* Group 1 */}
      <Sidenav>
        <a className="nav-link disabled">Group 1</a>

        <SidenavLink to="/admin" exact>
          Main
        </SidenavLink>
        <SidenavLink to="/admin/profile">Profile</SidenavLink>
        <SidenavLink to="/admin/nav1">Nav 1</SidenavLink>
      </Sidenav>

      {/* Group 2 */}
      <Sidenav>
        <a className="nav-link disabled">Group 2</a>

        <SidenavLink to="/admin/nav2">Nav 2</SidenavLink>
        <SidenavLink to="/admin/nav3">Nav 3</SidenavLink>
        <SidenavLink to="/admin/nav4">Nav 4</SidenavLink>
      </Sidenav>
    </div>
  )
}
