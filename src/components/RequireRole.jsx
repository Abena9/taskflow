import { useAuth } from '../context/AuthContext.jsx'

function RequireRole({ role, children }) {
  const { hasRole } = useAuth()

  if (!hasRole(role)) {
    return <p>You don't have permission to view this page.</p>
  }

  return children
}

export default RequireRole
