import React from 'react'

import Footerbar from './Footerbar'
import Content from './Content'
import Topbar from './Topbar'

export default function Page({ children }) {
  return (
    <div className="page">
      <header className="topbar">
        <Topbar />
      </header>
      <main className="main">
        <Content>{children}</Content>
      </main>
      <footer className="footerbar">
        <Footerbar />
      </footer>
    </div>
  )
}
