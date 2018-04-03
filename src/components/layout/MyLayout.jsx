import React from 'react'

import AppLayout from './AppLayout'
import MyFooterbar from './MyFooterbar'
import MySidebar from './MySidebar'

export default function MyLayout({ children }) {
  return (
    <AppLayout sidebar={<MySidebar />} content={children} footerbar={<MyFooterbar />} />
  )
}
