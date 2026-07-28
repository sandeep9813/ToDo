import { Navigate } from 'react-router-dom'

import ProtectedRoute from '@/components/ProtectedRoute'
import SidebarLayout from '@/layouts/SidebarLayout'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import Today from '@/pages/Today'
import Upcoming from '@/pages/Upcoming'
import Completed from '@/pages/Completed'
import Categories from '@/pages/Categories'

export const routes = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <SidebarLayout />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'today', element: <Today /> },
          { path: 'upcoming', element: <Upcoming /> },
          { path: 'completed', element: <Completed /> },
          { path: 'categories', element: <Categories /> },
        ],
      },
    ],
  },
]
