import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './AppRouter'

const ClientApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default ClientApp
