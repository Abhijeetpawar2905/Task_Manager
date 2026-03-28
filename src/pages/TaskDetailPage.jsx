import React from 'react'
import { useParams, Link } from 'react-router-dom'

// TaskDetailPage receives tasks list as prop
function TaskDetailPage({ tasks }) {
  const { id } = useParams()
  const task = tasks.find(t => String(t.id) === String(id))

  if (!task) {
    return (
      <div style={styles.page}>
        <p>Task not found.</p>
        <Link to="/tasks">Back to Tasks</Link>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Link to="/tasks" style={styles.back}>← Back to Tasks</Link>

        <div style={styles.card}>
          <h2 style={styles.title}>{task.title}</h2>
          <p style={styles.row}><strong>Status:</strong> {task.status}</p>
          <p style={styles.row}><strong>Priority:</strong> {task.priority}</p>
          <p style={styles.row}><strong>Description:</strong> {task.description || 'No description'}</p>
          <p style={styles.row}><strong>Task ID:</strong> #{task.id}</p>
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
    maxWidth: '600px',
  },
  back: {
    fontSize: '14px',
    color: '#007bff',
    display: 'inline-block',
    marginBottom: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '24px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#222',
  },
  row: {
    fontSize: '15px',
    color: '#444',
    marginBottom: '10px',
    lineHeight: '1.5',
  },
}

export default TaskDetailPage
