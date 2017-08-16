import React from 'react'
import { NavLink } from 'react-router-dom'

const menu = {
  main: [
    { label: 'Главная', to: '/' }
  ],

  footer: [
    {
      label: 'Настройки',
      nested: [
        {
          label: 'Профиль',
          to: '/settings/profile'
        }
      ]
    },
    { label: 'Выйти', to: '/auth/logout' }
  ]
}

const renderLink = link => {
  const renderNavLink = () => {
    return (
      <li className="nav-item" key={link.to}>
        <NavLink exact to={link.to} className="nav-link" activeClassName="active"
          onClick={this._handleNavLinkClick}>
          {link.label}
        </NavLink>
        {link.nested && renderMenu(link.nested, 'nested')}
      </li>
    )
  }

  const renderLabelLink = () => {
    return (
      <li className="nav-item" key={link.label}>
        <a className="nav-link">
          {link.label}
        </a>
        {link.nested && renderMenu(link.nested, 'nested')}
      </li>
    )
  }

  return link.to ? renderNavLink() : renderLabelLink()
}

const renderMenu = (menuLinks, additionalClassName = '') => {
  return (
    <ul className={'nav flex-column ' + additionalClassName}>
      {menuLinks.map(link => renderLink(link))}
    </ul>
  )
}

const SideMenu = () => {
  return (
    <nav className="sidemenu">
      {renderMenu(menu.main)}
      {renderMenu(menu.footer, '-sidemenu-footer')}
    </nav>
  )
}

export default SideMenu
