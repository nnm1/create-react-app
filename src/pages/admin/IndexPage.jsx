import React from 'react'
import { Link } from 'react-router-dom'

import MyContent from '../../components/layout/MyContent'

const IndexPage = () => {
  const content = <p>Здесь будет общая информация, статистика и т.п.</p>
  return (
    <MyContent
      header={<h1>Главная</h1>}
      actions={
        <Link to="/admin/settings/profile" className="btn btn-primary">
          Профиль
        </Link>
      }
      content={content}
    />
  )
}

export default IndexPage
