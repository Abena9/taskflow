import { createContext, useContext, useState } from 'react'
import { tasks as initialTasks } from '../data/tasks.js'

const TaskContext = createContext(null)
const availableLabels = ['Bug', 'Feature', 'Design', 'Urgent']

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks.map((t) => ({ ...t, assignee: null, labels: [] })))

  function addTask(task) {
    setTasks((prev) => [...prev, { ...task, id: Date.now(), assignee: null, labels: [] }])
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

  function toggleLabel(id, label) {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t
        const has = t.labels.includes(label)
        return { ...t, labels: has ? t.labels.filter((l) => l !== label) : [...t.labels, label] }
      })
    )
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, moveTask, removeTask, assignTask, toggleLabel, availableLabels }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}
