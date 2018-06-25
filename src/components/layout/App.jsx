import PropTypes from 'prop-types'
import React from 'react'

import Footer from './Footer'

export default function App({ children }) {
  return (
    <div className="app">
      {children} {/* Topbar and Main sections */}
      <Footer />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}
