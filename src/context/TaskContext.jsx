import { createContext, useContext, useState } from 'react'
import { tasks as initialTasks } from '../data/tasks.js'

const TaskContext = createContext(null)

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks.map((t) => ({ ...t, assignee: null })))

  function addTask(task) {
    setTasks((prev) => [...prev, { ...task, id: Date.now(), assignee: null }])
  }

  function moveTask(id, column) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, column } : t)))
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  function assignTask(id, assignee) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, assignee } : t)))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, moveTask, removeTask, assignTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}
