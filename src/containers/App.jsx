import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './Main'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
