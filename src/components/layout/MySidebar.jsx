import React from 'react'

import Account from './sidebar/Account'
import Sidemenu from './sidebar/Sidemenu'

export default function MySidebar() {
  return (
    <React.Fragment>
      <Account />
      <Sidemenu />
    </React.Fragment>
  )
}
