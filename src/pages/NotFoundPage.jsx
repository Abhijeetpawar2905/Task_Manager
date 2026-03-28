import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <p style={{ marginTop: '10px', color: '#666' }}>The page you are looking for does not exist.</p>
      <Link to="/dashboard" style={{ display: 'inline-block', marginTop: '16px', color: '#007bff' }}>
        Go to Dashboard
      </Link>
    </div>
  )
}

export default NotFoundPage
