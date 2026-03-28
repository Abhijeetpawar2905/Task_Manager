import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFetch, useDebounce } from '../hooks/useCustomHooks.js'

// map API data to our task format
function mapTask(todo) {
  const priorities = ['Low', 'Medium', 'High']
  return {
    id: todo.id,
    title: todo.title,
    description: 'Task fetched from API',
    status: todo.completed ? 'Completed' : 'Pending',
    priority: priorities[todo.id % 3],
  }
}

function TasksPage({ tasks, setTasks }) {
  const [newTitle, setNewTitle] = useState('')
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  const debouncedSearch = useDebounce(search, 400)

  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=15'
  )

  // load tasks from API when data arrives
  useEffect(() => {
    if (data) {
      setTasks(data.map(mapTask))
    }
  }, [data])

  function addTask() {
    if (!newTitle.trim()) return
    const task = {
      id: Date.now(),
      title: newTitle.trim(),
      description: '',
      status: 'Pending',
      priority: 'Medium',
    }
    setTasks(prev => [task, ...prev])
    setNewTitle('')
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  // filter by search and status
  const filtered = tasks.filter(task => {
    const matchSearch = task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    const matchStatus = statusFilter === 'All Status' || task.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* header */}
        <div style={styles.header}>
          <h2 style={styles.heading}>My Task Manager</h2>
          <Link to="/dashboard">Back to Dashboard</Link>
        </div>

        {/* add task bar */}
        <div style={styles.addRow}>
          <input
            type="text"
            placeholder="Enter task title..."
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
            style={styles.addInput}
          />
          <button onClick={addTask} style={styles.addBtn}>Add Task</button>
        </div>

        {/* search and filter */}
        <div style={styles.filterRow}>
          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={styles.searchInput}
          />
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            style={styles.select}
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        {/* loading / error */}
        {loading && <p style={styles.info}>Loading tasks...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {/* task list */}
        {filtered.map(task => (
          <div key={task.id} style={styles.taskRow}>
            <div style={styles.taskInfo}>
              <p style={styles.taskTitle}>{task.title}</p>
              <p style={styles.taskMeta}>
                Priority: <strong>{task.priority}</strong> | Status: <strong>{task.status}</strong>
              </p>
            </div>
            <div style={styles.taskActions}>
              <Link to={`/tasks/${task.id}`} style={styles.viewLink}>View</Link>
              <button onClick={() => deleteTask(task.id)} style={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}

        {!loading && filtered.length === 0 && (
          <p style={styles.info}>No tasks found.</p>
        )}
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#fff',
    padding: '20px',
  },
  container: {
    maxWidth: '640px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#222',
  },
  addRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '12px',
  },
  addInput: {
    flex: 1,
    padding: '9px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
  },
  addBtn: {
    padding: '9px 18px',
    background: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  filterRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '14px',
  },
  searchInput: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
  },
  select: {
    padding: '8px 10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
  },
  taskRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 14px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    marginBottom: '8px',
    background: '#fff',
  },
  taskInfo: {},
  taskTitle: {
    fontSize: '15px',
    color: '#222',
    marginBottom: '4px',
  },
  taskMeta: {
    fontSize: '13px',
    color: '#666',
  },
  taskActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  viewLink: {
    fontSize: '14px',
    color: '#007bff',
  },
  deleteBtn: {
    padding: '5px 14px',
    background: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '13px',
  },
  info: {
    color: '#888',
    fontSize: '14px',
    padding: '20px 0',
  },
}

export default TasksPage
