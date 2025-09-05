const navItems = [
  { label: 'Boards', icon: '🗂️' },
  { label: 'Teams', icon: '👥' },
  { label: 'Notifications', icon: '🔔' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">TaskFlow</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div key={item.label} className="sidebar-item">
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
