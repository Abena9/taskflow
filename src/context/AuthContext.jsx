import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

function roleFor(email) {
  return email.endsWith('@taskflow-admin.com') ? 'admin' : 'member'
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(email, password) {
    if (email && password) {
      setUser({ email, name: email.split('@')[0], role: roleFor(email) })
      return true
    }
    return false
  }

  function signup(name, email, password) {
    if (name && email && password) {
      setUser({ email, name, role: roleFor(email) })
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
  }

  function hasRole(role) {
    return user && user.role === role
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
