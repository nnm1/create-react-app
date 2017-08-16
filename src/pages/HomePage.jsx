import React from 'react'

import MyContent from '../components/ui/layout/MyContent'

const HomePage = () => {
  return (
    <MyContent
      header="Главная страница"
      content={
        <p>Здесь будет общая информация, статистика и т.п.</p>
      } />
  )
}

export default HomePage
