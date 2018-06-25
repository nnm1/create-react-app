import PropTypes from 'prop-types'
import React from 'react'
import withRouter from 'react-router-dom/withRouter'

import logo from '../../pages/logo.svg'

export default function Header({ back, header, children }) {
  return (
    <header className="fixed h-12 pin-t pin-x z-100 flex items-center border-b border-grey-light bg-white py-2">
      <div className="flex items-center container mx-auto px-4">
        {/* Back button */}
        <div className="w-1/4">
          <BackOrLogoWithRouter back={back} />
        </div>
        {/* Header */}
        <h3 className="w-1/2 px-4 text-center">{header}</h3>
        {/* Actions */}
        <div className="w-1/4 text-right">{children}</div>
      </div>
    </header>
  )
}

Header.propTypes = {
  back: PropTypes.bool,
  header: PropTypes.string,
  children: PropTypes.element,
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

function BackOrLogo({ back, history }) {
  const goBack = () => history.goBack()

  return back ? (
    <button type="button" className="pl-2 pr-6 text-3xl" onClick={goBack}>
      &lsaquo;
    </button>
  ) : (
    <img src={logo} className="h-8" alt="logo" />
  )
}

const BackOrLogoWithRouter = withRouter(BackOrLogo)
