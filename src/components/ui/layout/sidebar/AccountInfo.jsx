import React from 'react'
import { Link } from 'react-router-dom'

const AccountInfo = () => {
  return (
    <div className="account-info">
      <Link to='/settings/profile'>
        User Name
      </Link>
    </div>
  )
}

export default AccountInfo
