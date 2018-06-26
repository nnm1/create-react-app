import PropTypes from 'prop-types'
import React from 'react'

import Menu from '../Menu'
import './Main.css'

export default function Main({ children }) {
  return (
    <div className="flex container mx-auto px-4">
      <aside className="hidden lg:block w-full lg:w-1/6 overflow-y-auto px-4 sidenav">
        <Menu />
      </aside>
      <main className="w-full lg:w-5/6 lg:px-4">{children}</main>
    </div>
  )
}

Main.propTypes = { children: PropTypes.node }
Main.defaultProps = { children: null }
