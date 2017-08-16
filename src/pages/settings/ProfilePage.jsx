import React from 'react'

import MyContent from '../../components/ui/layout/MyContent'

const ProfilePage = () => {
  return (
    <MyContent
      header="Мой профиль"
      breadcrumbs={
        <ul className="breadcrumb">
          <li className="breadcrumb-item">Настройки</li>
          {/* <li className="breadcrumb-item"><Link to="/settings">Настройки</Link></li> */}
        </ul>
      }
      content={
        <p>Здесь будут настройки профиля</p>
      } />
  )
}

export default ProfilePage
