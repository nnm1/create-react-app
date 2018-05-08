import React from 'react'

export default function MyContent({ header, actions, content }) {
  return (
    <div className="my-content">
      <header className="container-fluid py-2 header">
        <div className="row align-items-center">
          <div className="col-12 col-sm">{header}</div>
          {actions && <div className="col-12 col-sm-auto action-group">{actions}</div>}
        </div>
      </header>

      <main className="container-fluid py-2 content">{content}</main>
    </div>
  )
}
