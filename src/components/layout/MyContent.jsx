import React from 'react'

export default function MyContent({ header, actions, content }) {
  return (
    <div className="my-content py-2">
      <header className="container-fluid header">
        <div className="row align-items-center">
          {header && <div className="col-12 col-sm">{header}</div>}
          {actions && <div className="col-12 col-sm-auto btn-group">{actions}</div>}
        </div>
      </header>

      <main className="container-fluid content pt-2">{content}</main>
    </div>
  )
}
