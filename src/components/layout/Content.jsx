import PropTypes from 'prop-types'
import React from 'react'
import Motion from 'react-motion/lib/Motion'
import spring from 'react-motion/lib/spring'

export default function Content({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-10 offset-lg-2">
          <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
            {motion => <main style={{ opacity: motion.opacity }}>{children}</main>}
          </Motion>
        </div>
      </div>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired
}
