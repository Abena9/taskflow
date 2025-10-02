import { useState } from 'react'
import { useComments } from '../context/CommentContext.jsx'

function CommentList({ taskId }) {
  const { comments, addComment } = useComments()
  const [text, setText] = useState('')
  const taskComments = comments.filter((c) => c.taskId === taskId)

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    addComment(taskId, 'You', text.trim())
    setText('')
  }

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comment-list">
        {taskComments.map((c) => (
          <div key={c.id} className="comment-item">
            <strong>{c.author}</strong>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          placeholder="Add a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default CommentList
