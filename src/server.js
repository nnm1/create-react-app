import express from 'express'
import favicon from 'serve-favicon' // TODO: remove later
import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'

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

// Redirect helper.
const redirect = (res, location) => {
  res.writeHead(301, {
    Location: location
  })
  res.end()
}

const handler = (req, res) => {
  // Track redirections.
  const context = {}

  const content = renderToString(
    <ServerApp location={req.url} context={context} />
  )

  // Somewhere a `<Redirect>` was rendered.
  if (context.url) {
    redirect(res, context.url)
    return
  }

  // We're good, send the response.
  const page = template.replace('{{ content }}', content)
  res.send(page)
}

// Handle requests.
app.get('*', handler)

// Start the server.
app.listen(port, () => {
  console.log(`Server application is listening on port ${port}`)
})
