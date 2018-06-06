import React from 'react'

import MyContent from '../components/layout/MyContent'
import NotFound from '../lib/components/NotFound'

export default function NotFoundPage() {
  return <MyContent content={<NotFound />} />
}
