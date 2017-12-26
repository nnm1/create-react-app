import React from 'react'

import toggleSidebar from '../../../actions/layoutActions'

const SidebarToggler = () => {
  return (
    <button
      className="app-sidebar-toggler navbar-toggler d-md-none"
      type="button"
      aria-label="Toggle navigation"
      onClick={toggleSidebar}
    >
      <span className="navbar-toggler-icon" />
    </button>
  )
}

export default SidebarToggler
