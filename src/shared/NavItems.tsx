import { NavLink } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  Calendar,
  CalendarClock,
  CheckCheck,
  Tags,
} from 'lucide-react'

export interface NavSubItem {
  label: string
  path: string
}

export interface NavItem {
  icon: LucideIcon
  label: string
  path: string
  children?: NavSubItem[]
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Calendar, label: 'Today', path: '/today' },
  { icon: CalendarClock, label: 'Upcoming', path: '/upcoming' },
  { icon: CheckCheck, label: 'Completed', path: '/completed' },
  { icon: Tags, label: 'Categories', path: '/categories' },
]

const NavItems = () => {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) =>
        item.children ? (
          <div key={item.label}>
            <div className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground">
              <item.icon className="size-4" />
              {item.label}
            </div>
            <div className="ml-4 flex flex-col border-l pl-2">
              {item.children.map((child) => (
                <NavLink
                  key={child.path}
                  to={child.path}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-1.5 text-sm transition-colors ${
                      isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              }`
            }
          >
            <item.icon className="size-4" />
            {item.label}
          </NavLink>
        )
      )}
    </nav>
  )
}

export default NavItems
