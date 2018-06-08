import PropTypes from 'prop-types'
import React from 'react'

import Menu from '../Menu'

export default function Content({ children }) {
  return (
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-lg-2 d-none d-lg-block">
          <div className="sidebar">
            <Menu />
          </div>
        </div>

        {/* Content */}
        <div className="col-12 col-lg-10">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired
}
