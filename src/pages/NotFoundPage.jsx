import React from 'react'

import MyContent from '../components/ui/layout/MyContent'

const NotFoundPage = () => {
  return (
    <MyContent
      header='Та самая "ОШИБКА 404"'
      content={
        <h5 className="alert alert-danger" role="alert">
          Такой страницы не существует :-(
        </h5>
      } />
  )
}

export default NotFoundPage
