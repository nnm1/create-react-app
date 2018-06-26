import PropTypes from 'prop-types'
import React from 'react'

import Header from './Header'
import Main from './Main'

export default function Page({ back, header, actions, children }) {
  return (
    <React.Fragment>
      <Header header={header} back={back}>
        {actions}
      </Header>
      <Main>{children}</Main>
    </React.Fragment>
  )
}

Page.propTypes = {
  back: PropTypes.bool,
  header: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node,
}
Page.defaultProps = {
  back: false,
  header: null,
  actions: null,
  children: null,
}
