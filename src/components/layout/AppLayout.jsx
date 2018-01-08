import React from 'react'

const AppLayout = ({ sidebar, content, footerbar }) => (
  <div className="app-layout">
    <aside className="app-sidebar">{sidebar}</aside>
    <div className="app-page">{content}</div>
    <footer className="app-footerbar">{footerbar}</footer>
  </div>
)

export default AppLayout
