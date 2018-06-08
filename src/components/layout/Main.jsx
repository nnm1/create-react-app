import PropTypes from 'prop-types'
import React from 'react'

import Content from './Content'
import Topbar from './Topbar'

export default function Main({ back, header, actions, children }) {
  return (
    <React.Fragment>
      <Topbar header={header} back={back}>
        {actions}
      </Topbar>
      <Content>{children}</Content>
    </React.Fragment>
  )
}

Main.propTypes = {
  back: PropTypes.bool,
  header: PropTypes.string,
  actions: PropTypes.element,
  children: PropTypes.element.isRequired
}
