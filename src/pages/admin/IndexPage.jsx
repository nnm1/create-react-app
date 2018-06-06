import React from 'react'
import Link from 'react-router-dom/Link'

import MyContent from '../../components/layout/MyContent'

export default function IndexPage() {
  const content = <p>Здесь будет общая информация, статистика и т.п.</p>
  return (
    <MyContent
      header={<h1 className="h2">Главная с очень длинным названием</h1>}
      actions={
        <Link to="/admin/profile" className="btn btn-primary">
          Профиль
        </Link>
      }
      content={content}
    />
  )
}
