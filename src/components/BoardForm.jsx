import { useState } from 'react'

function BoardForm({ onAdd }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) {
      setError('Board name is required')
      return
    }
    onAdd(name.trim(), description.trim())
    setName('')
    setDescription('')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <input placeholder="Board name" value={name} onChange={(e) => setName(e.target.value)} />
        {error && <span className="field-error">{error}</span>}
      </div>
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Create board</button>
    </form>
  )
}

export default BoardForm
