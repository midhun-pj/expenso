import { createBrowserRouter } from 'react-router-dom'
import Welcome from './pages/Welcome'

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: Welcome
  },
])
