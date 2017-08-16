import React from 'react'

const handleSidebarToggle = () => {
  document.dispatchEvent(new Event('onSidebarToggle'))
}

const SidebarToggler = () => {
  return (
    <button className="app-sidebar-toggler navbar-toggler d-md-none" type="button"
      aria-label="Toggle navigation" onClick={handleSidebarToggle}>
      <span className="navbar-toggler-icon" />
    </button>
  )
}

export default SidebarToggler
