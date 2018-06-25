import React from 'react'

import Page from '../../components/layout/Page'
import MenuNav from '../../components/Menu'

export default function Menu() {
  return (
    <Page>
      <div className="mobilenav">
        <MenuNav />
      </div>
    </Page>
  )
}
