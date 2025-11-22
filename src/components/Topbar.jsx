import { useTheme } from '../context/ThemeContext.jsx'

function Topbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="topbar">
      <div className="topbar-title">TaskFlow</div>
      <div className="topbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <span className="topbar-user">Admin</span>
      </div>
    </header>
  )
}

export default Topbar
