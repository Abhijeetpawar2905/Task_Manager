import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    const success = login(email, password)
    if (success) {
      navigate('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.title}>Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
            style={styles.input}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
            style={styles.input}
            required
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.btn}>Login</button>
        </form>

        <div style={styles.hint}>
          <p><strong>Demo credentials:</strong></p>
          <p>Email: abhijeet@demo.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    background: '#fff',
    padding: '30px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    width: '360px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '22px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '14px',
    color: '#555',
    fontWeight: 'bold',
  },
  input: {
    padding: '9px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
  },
  btn: {
    marginTop: '6px',
    padding: '10px',
    background: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: '13px',
  },
  hint: {
    marginTop: '18px',
    padding: '12px',
    background: '#f8f8f8',
    border: '1px solid #eee',
    borderRadius: '4px',
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.6',
  },
}

export default LoginPage
