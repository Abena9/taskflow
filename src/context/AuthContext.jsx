import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(email, password) {
    if (email && password) {
      setUser({ email, name: email.split('@')[0] })
      return true
    }
    return false
  }

  function signup(name, email, password) {
    if (name && email && password) {
      setUser({ email, name })
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
