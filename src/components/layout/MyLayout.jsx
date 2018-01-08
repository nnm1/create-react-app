import React from 'react'

import AppLayout from './AppLayout'
import MyFooterbar from './MyFooterbar'
import MySidebar from './MySidebar'

const MyLayout = ({ children }) => (
  <AppLayout
    sidebar={<MySidebar />}
    content={children}
    footerbar={<MyFooterbar />}
  />
)

export default MyLayout
