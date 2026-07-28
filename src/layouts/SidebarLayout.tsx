import { Outlet } from 'react-router-dom'
import Sidebar from '@/shared/Sidebar'

const SidebarLayout = () => {
  return (
    <div className="flex h-dvh">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default SidebarLayout
