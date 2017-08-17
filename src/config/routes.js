// Public routes which should be indexed.

import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const routes = [
  { exact: true, path: '/home', component: HomePage },
  { exact: true, path: '/notfound', component: NotFoundPage }
]

export default routes
