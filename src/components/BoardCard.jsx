import { Link } from 'react-router-dom'

function BoardCard({ board }) {
  return (
    <Link to={'/boards/' + board.id} className="board-card" style={{ borderTopColor: board.color }}>
      <h3>{board.name}</h3>
      <p className="board-description">{board.description}</p>
      <span className="board-task-count">{board.taskCount} tasks</span>
    </Link>
  )
}

export default BoardCard
