import PropTypes from 'prop-types'
import React from 'react'
import Motion from 'react-motion/lib/Motion'
import spring from 'react-motion/lib/spring'

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
          <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
            {motion => (
              <div className="content" style={{ opacity: motion.opacity }}>
                {children}
              </div>
            )}
          </Motion>
        </div>
      </div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired
}
