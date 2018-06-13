import React from 'react'

import Main from '../../components/layout/Main'

export default function Index() {
  return (
    <Main header="Main Page">
      <section className="card">
        <div className="card-body">
          <h4 className="card-title">Main Page</h4>
          <p className="card-text">Statistics, reports, charts, etc. go here</p>
        </div>
      </section>
    </Main>
  )
}
