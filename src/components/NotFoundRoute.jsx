import React from 'react'
import { Redirect } from 'react-router-dom'

const NotFoundRoute = () => {
  return (
    <Redirect to="/notfound" />
  )
}

export default NotFoundRoute
