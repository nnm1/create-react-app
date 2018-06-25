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
  header: PropTypes.string,
  actions: PropTypes.element,
  children: PropTypes.element,
}
