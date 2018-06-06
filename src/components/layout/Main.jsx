import React from 'react'

import Content from './Content'
import Topbar from './Topbar'

export default function Main({ header, actions, children }) {
  return (
    <React.Fragment>
      <header className="topbar">
        <Topbar header={header}>{actions}</Topbar>
      </header>
      <main className="main">
        <Content>{children}</Content>
      </main>
    </React.Fragment>
  )
}
