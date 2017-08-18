import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import configureStore from '../stores/configureStore'
import AppRouter from './AppRouter'

const store = configureStore()
console.log('global', store)

const ServerApp = ({ location, context }) => {
  console.log('app', store)
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <AppRouter />
      </StaticRouter>
    </Provider>
  )
}

export default ServerApp
