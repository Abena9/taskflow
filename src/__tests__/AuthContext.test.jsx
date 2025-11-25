import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AuthProvider, useAuth } from '../context/AuthContext.jsx'

function Probe() {
  const { user, login } = useAuth()
  return (
    <div>
      <span>{user ? user.role : 'anonymous'}</span>
      <button onClick={() => login('owner@taskflow-admin.com', 'secret')}>login-admin</button>
      <button onClick={() => login('member@example.com', 'secret')}>login-member</button>
    </div>
  )
}

describe('AuthContext', () => {
  it('assigns admin role for admin domain emails', () => {
    render(
      <AuthProvider>
        <Probe />
      </AuthProvider>
    )
    fireEvent.click(screen.getByText('login-admin'))
    expect(screen.getByText('admin')).toBeInTheDocument()
  })

  it('assigns member role otherwise', () => {
    render(
      <AuthProvider>
        <Probe />
      </AuthProvider>
    )
    fireEvent.click(screen.getByText('login-member'))
    expect(screen.getByText('member')).toBeInTheDocument()
  })
})
