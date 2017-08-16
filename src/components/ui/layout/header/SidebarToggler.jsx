import React from 'react'

class SidebarToggler extends React.Component {
  constructor(props) {
    super(props)

    this._handleSidebarToggle = this._handleSidebarToggle.bind(this)
  }

  _handleSidebarToggle() {
    document.dispatchEvent(new Event('onSidebarToggle'))
  }

  render() {
    return (
      <button className="app-sidebar-toggler navbar-toggler d-md-none" type="button"
        aria-label="Toggle navigation" onClick={this._handleSidebarToggle}>
        <span className="navbar-toggler-icon" />
      </button>
    )
  }
}

export default SidebarToggler
