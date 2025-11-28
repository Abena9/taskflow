import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

function Layout({ children }) {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Sidebar />
      <div className="layout-main">
        <Topbar />
        <main className="layout-content" id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
