function BoardCard({ board }) {
  return (
    <div className="board-card" style={{ borderTopColor: board.color }}>
      <h3>{board.name}</h3>
      <p className="board-description">{board.description}</p>
      <span className="board-task-count">{board.taskCount} tasks</span>
    </div>
  )
}

export default BoardCard
