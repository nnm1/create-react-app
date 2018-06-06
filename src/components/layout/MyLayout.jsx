import React from 'react'

import AppLayout from './AppLayout'
import MyFooterbar from './MyFooterbar'
import MyPage from './MyPage'
import MyTopbar from './MyTopbar'

export default function MyLayout({ children }) {
  return (
    <AppLayout topbar={<MyTopbar />} footerbar={<MyFooterbar />}>
      <MyPage>{children}</MyPage>
    </AppLayout>
  )
}
