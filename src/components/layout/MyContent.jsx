import React from 'react'

export default function MyContent({ header, actions, children }) {
  return (
    <div className="content-wrapper">
      {(header || actions) && (
        <div className="row align-items-center">
          {header && <div className="col-12 col-sm">{header}</div>}
          {actions && <div className="col-12 col-sm-auto btn-group">{actions}</div>}
        </div>
      )}

      <div className="content">{children}</div>
    </div>
  )
}
