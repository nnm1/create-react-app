import React from 'react'

import MySidebar from './MySidebar'

export default function MyPage({ children }) {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-12 col-lg-2 d-none d-lg-block">
          <MySidebar />
        </div>
        <div className="col-12 col-lg-10">{children}</div>
      </div>
    </div>
  )
}
