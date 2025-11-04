import { useState } from 'react'

function validate(values) {
  const errors = {}
  if (!values.title.trim()) errors.title = 'Title is required'
  if (values.title.trim().length > 80) errors.title = 'Title must be under 80 characters'
  return errors
}

function TaskForm({ onAdd, boardId }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const values = { title }
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      onAdd({ title: title.trim(), boardId, column: 'To Do', priority })
      setTitle('')
      setPriority('Medium')
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <input
          placeholder="New task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <span className="field-error">{errors.title}</span>}
      </div>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add task</button>
    </form>
  )
}

export default TaskForm
