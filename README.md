# Task Manager

A simple multi-user task manager built with React and Vite.

## Features
- Login / Logout (mock authentication)
- Protected routes (redirect to login if not logged in)
- Fetch tasks from JSONPlaceholder API
- Add task, Delete task, View task detail
- Search tasks (with debounce)
- Filter tasks by status
- Custom hooks: useFetch, useDebounce, useLocalStorage
- Context API for auth state

## Login Credentials
- Email: abhijeet@demo.com
- Password: 123456

## How to Run

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Project Structure

```
src/
  context/       - AuthContext (login/logout state)
  hooks/         - Custom hooks (useFetch, useDebounce, useLocalStorage)
  pages/         - LoginPage, DashboardPage, TasksPage, TaskDetailPage
  components/    - ProtectedRoute
  App.jsx        - Routes setup
  main.jsx       - Entry point
```

## Tech Used
- React 18
- React Router v6
- Vite
- JSONPlaceholder API
