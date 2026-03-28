import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function DashboardPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Dashboard</h1>
        <p style={styles.welcome}>
          Welcome back, <strong>{user?.name}</strong>!
        </p>

        <div style={styles.links}>
          <Link to="/tasks">Go to Tasks</Link>
          <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#fff',
    padding: '30px',
  },
  container: {
    maxWidth: '700px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: '10px',
  },
  welcome: {
    fontSize: '15px',
    color: '#444',
    marginBottom: '20px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  logoutBtn: {
    padding: '6px 14px',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#333',
  },
}

export default DashboardPage
