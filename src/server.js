import express from 'express'
import favicon from 'serve-favicon' // TODO: remove later
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath } from 'react-router-dom'

import configureStore from './stores/configureStore'
import routes from './config/routes'
import ServerApp from './containers/ServerApp'

// Load template.
const template = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8')

// Create an Express app and define port.
const app = express()
const port = 4000

// TODO: remove later
// Serve favicon and static assets (for dev only).
app.use(favicon(path.join(__dirname, '../favicon.ico')))
app.use('/static', express.static(path.join(__dirname, '../static')))
// End of TODO

// Return an array of promises to fetch data required for rendering
// matching components.
const dataPromises = (url, store) => {
  const promises = []

  // Use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match.
  routes.some(route => {
    const match = matchPath(url, route)
    if (match) {
      const fetchData = route.component.fetchData
      if (fetchData instanceof Function) {
        promises.push(fetchData(store.dispatch))
      }
    }
    return match
  })

  return promises
}

// Redirect helper.
const redirect = (res, location) => {
  res.writeHead(301, { Location: location })
  res.end()
}

const renderOrRedirect = (req, res, store) => {
  // Track redirections.
  const context = {}

  const content = renderToString(
    <ServerApp store={store} location={req.url} context={context} />
  )

  // Somewhere a `<Redirect>` was rendered.
  if (context.url) {
    redirect(res, context.url)
    return
  }

  // We're good, send the response.
  const page = template
    .replace('<div id="content"></div>', content)
    .replace("const store = {}", `const store = ${JSON.stringify(store.getState())}`)
  res.send(page)
}

const handler = (req, res) => {
  // Create a Redux store for every request.
  const store = configureStore()

  const promises = dataPromises(req.url, store)
  Promise.all(promises).then(() => renderOrRedirect(req, res, store))
}

// Handle requests.
app.get('*', handler)

// Start the server.
app.listen(port, () => {
  console.log(`Server application is listening on port ${port}`)
})
