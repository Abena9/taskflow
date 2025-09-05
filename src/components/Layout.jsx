import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-main">
        <Topbar />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  )
}

export default Layout
