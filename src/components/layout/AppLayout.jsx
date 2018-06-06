import React from 'react'

export default function AppLayout({ topbar, footerbar, children }) {
  return (
    <div className="app-layout">
      <header className="app-topbar">{topbar}</header>
      <main className="app-page">{children}</main>
      <footer className="app-footerbar">{footerbar}</footer>
    </div>
  )
}
