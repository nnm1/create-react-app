import React from 'react'

export default function AppLayout({ sidebar, content, footerbar }) {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">{sidebar}</aside>
      <div className="app-page">{content}</div>
      <footer className="app-footerbar">{footerbar}</footer>
    </div>
  )
}
