import React from 'react'

import Page from '../../components/layout/Page'

export default function NotFound() {
  return (
    <Page back>
      <div className="bg-red rounded text-white p-4" role="alert">
        <h2 className="mb-2">Admin Page Not Found</h2>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    </Page>
  )
}
