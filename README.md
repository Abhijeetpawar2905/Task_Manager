<img width="1892" height="872" alt="task_manager" src="https://github.com/user-attachments/assets/d67195b4-bd5b-44a8-993e-02c9103d0f95" />
<img width="1917" height="863" alt="dashboard" src="https://github.com/user-attachments/assets/f4ef2568-c85a-4d4e-936c-2d12e2a792cc" />
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
