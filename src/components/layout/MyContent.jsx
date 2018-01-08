import React from 'react'

const MyContent = ({ header, actions, content }) => (
  <div className="container-fluid">
    <div className="my-2 header">
      <div className="row align-items-center">
        <div className="col">{header}</div>
        {actions && <div className="col-auto action-group">{actions}</div>}
      </div>
    </div>

    <main className="content">{content}</main>
  </div>
)

export default MyContent
