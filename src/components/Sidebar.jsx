import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Boards', icon: '🗂️', to: '/' },
  { label: 'Teams', icon: '👥', to: '/teams' },
  { label: 'Notifications', icon: '🔔', to: '/notifications' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">TaskFlow</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => 'sidebar-item' + (isActive ? ' active' : '')}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
