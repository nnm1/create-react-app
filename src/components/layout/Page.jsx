import PropTypes from 'prop-types'
import React from 'react'

import Footerbar from './Footerbar'
import Menu from '../Menu'

export default function Page({ children }) {
  return (
    <div className="page">
      {/* Topbar and main sections */}
      {children}

      {/* Sidebar */}
      <div className="container d-none d-lg-block">
        <aside className="sidebar">
          <Menu />
        </aside>
      </div>

      <Footerbar />
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.element.isRequired
}
