import React from 'react'
import { Redirect } from 'react-router-dom'

const NotFoundRoute = () => {
  return (
    <Redirect to="/not-found" />
  )
}

export default NotFoundRoute
