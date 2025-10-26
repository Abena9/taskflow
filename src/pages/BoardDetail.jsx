import { useParams, Link } from 'react-router-dom'
import { boards } from '../data/boards.js'
import { columns } from '../data/tasks.js'
import { useTasks } from '../context/TaskContext.jsx'
import TaskForm from '../components/TaskForm.jsx'
import TaskCardBadge from '../components/TaskCardBadge.jsx'

function BoardDetail() {
  const { id } = useParams()
  const board = boards.find((b) => String(b.id) === id)
  const { tasks, addTask, moveTask } = useTasks()

  if (!board) {
    return <p>Board not found. <Link to="/">Back to boards</Link></p>
  }

  const boardTasks = tasks.filter((t) => t.boardId === board.id)

  function nextColumn(current) {
    const idx = columns.indexOf(current)
    return columns[Math.min(idx + 1, columns.length - 1)]
  }

  function prevColumn(current) {
    const idx = columns.indexOf(current)
    return columns[Math.max(idx - 1, 0)]
  }

  return (
    <div>
      <Link to="/">&larr; Back to boards</Link>
      <h1>{board.name}</h1>
      <TaskForm onAdd={addTask} boardId={board.id} />
      <div className="board-columns">
        {columns.map((col) => (
          <div key={col} className="board-column">
            <h3>{col}</h3>
            {boardTasks
              .filter((t) => t.column === col)
              .map((t) => (
                <div key={t.id} className="task-card">
                  <div className="task-card-row">
                    <Link to={'/tasks/' + t.id} className="task-card-title">{t.title}</Link>
                    <TaskCardBadge assignee={t.assignee} />
                  </div>
                  {t.dueDate && <div className="task-due-date">Due {t.dueDate}</div>}
                  <div className="task-card-actions">
                    {col !== columns[0] && (
                      <button onClick={() => moveTask(t.id, prevColumn(col))}>&larr;</button>
                    )}
                    {col !== columns[columns.length - 1] && (
                      <button onClick={() => moveTask(t.id, nextColumn(col))}>&rarr;</button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardDetail
