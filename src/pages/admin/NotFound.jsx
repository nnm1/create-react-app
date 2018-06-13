import React from 'react'

import Main from '../../components/layout/Main'

export default function NotFound() {
  return (
    <Main>
      <section className="card">
        <div className="card-body">
          <h4 className="card-title">Page Not Found</h4>
          <p className="card-text">
            Sorry, but the page you were trying to view does not exist.
          </p>
        </div>
      </section>
    </Main>
  )
}
