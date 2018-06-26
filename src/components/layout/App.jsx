import PropTypes from 'prop-types'
import React from 'react'

import Footer from './Footer'

export default function App({ children }) {
  return (
    <div className="app">
      {/* Topbar and Main sections */}
      {children}

      <Footer />
    </div>
  )
}

App.propTypes = { children: PropTypes.node.isRequired }
