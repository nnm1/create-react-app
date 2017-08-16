import React from 'react'
import { Link } from 'react-router-dom'

import MyContent from '../components/ui/layout/MyContent'

const HomePage = () => {
  return (
    <MyContent
      header="Главная страница"
      actions={
        <Link to="/settings/profile" className="btn btn-primary">Профиль</Link>
      }
      content={
        <p>Здесь будет общая информация, статистика и т.п.</p>
      } />
  )
}

export default HomePage
