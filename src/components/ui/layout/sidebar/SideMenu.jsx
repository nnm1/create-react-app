import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { toggleSidebar } from '../../../../actions/layoutActions'
import deviceUtil from '../../../../lib/utils/deviceUtil'
import featherUtil from '../../../../lib/utils/feather/featherUtil'

const menu = {
  main: [
    { icon: 'home', label: 'Главная', to: '/' }
  ],

  footer: [
    {
      icon: 'settings',
      label: 'Настройки',
      nested: [
        {
          label: 'Профиль',
          to: '/settings/profile'
        }
      ]
    },
    { icon: 'log-out', label: 'Выйти', to: '/auth/logout' }
  ]
}

const renderLink = (link, onSidebarToggle) => {
  const renderIcon = () => {
    return link.icon && featherUtil.render(link.icon, { className: 'mr-2' })
  }

  const renderNested = () => {
    return link.nested && renderMenu(link.nested, onSidebarToggle, 'nested')
  }

  const renderNavLink = () => {
    return (
      <li className="nav-item" key={link.to}>
        <NavLink exact to={link.to} className="nav-link" activeClassName="active"
          onClick={onSidebarToggle}>
          {renderIcon()}
          {link.label}
        </NavLink>
        {renderNested()}
      </li>
    )
  }

  const renderLabelLink = () => {
    return (
      <li className="nav-item" key={link.label}>
        <a className="nav-link">
          {renderIcon()}
          {link.label}

          {/* Sample badge */}
          <span className="badge badge-primary sidemenu-badge">1</span>
        </a>
        {renderNested()}
      </li>
    )
  }

  return link.to ? renderNavLink() : renderLabelLink()
}

const renderMenu = (menuLinks, onSidebarToggle, additionalClassName = '') => {
  return (
    <ul className={'nav flex-column ' + additionalClassName}>
      {menuLinks.map(link => renderLink(link, onSidebarToggle))}
    </ul>
  )
}

const SideMenu = ({ onSidebarToggle }) => {
  return (
    <nav className="sidemenu">
      {renderMenu(menu.main, onSidebarToggle)}
      {renderMenu(menu.footer, onSidebarToggle, '-sidemenu-footer')}
    </nav>
  )
}

//
// Container implementation.
//

const mapDispatchToProps = dispatch => {
  const handleSidebarToggle = () => {
    if (deviceUtil.isMobile()) {
      dispatch(toggleSidebar())
    }
  }

  return {
    onSidebarToggle: handleSidebarToggle
  }
}

export default connect(null, mapDispatchToProps)(SideMenu)
