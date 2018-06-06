import React from 'react'

import Main from '../../components/layout/Main'

export default function NotFound() {
  return (
    <Main>
      <h5 className="alert alert-danger" role="alert">
        The requested page does not exist :-(
      </h5>
    </Main>
  )
}
