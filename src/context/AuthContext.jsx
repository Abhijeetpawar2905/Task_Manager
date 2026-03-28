import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null)

// mock user for login - no real backend needed
const MOCK_USER = {
  name: 'Abhijeet Pawar',
  email: 'abhijeet@demo.com',
  password: '123456',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function login(email, password) {
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      setUser({ name: MOCK_USER.name, email: MOCK_USER.email })
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
