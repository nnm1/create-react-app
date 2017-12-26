import React from 'react'

import AccountInfo from './sidebar/AccountInfo'
import SideMenu from './sidebar/SideMenu'

const MySidebar = () => {
  return (
    <div className="h-100">
      <AccountInfo />
      <SideMenu />
    </div>
  )
}

export default MySidebar
