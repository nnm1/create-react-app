import React from 'react'

const MyContent = ({ header, actions, content }) => (
  <React.Fragment>
    <header className="container-fluid pt-2 header">
      <div className="row align-items-center">
        <div className="col">{header}</div>
        {actions && <div className="col-auto action-group">{actions}</div>}
      </div>
    </header>

    <main className="container-fluid py-2 content">{content}</main>
  </React.Fragment>
)

export default MyContent
