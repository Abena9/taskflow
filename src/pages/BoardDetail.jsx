import { useParams, Link } from 'react-router-dom'
import { boards } from '../data/boards.js'
import { columns } from '../data/tasks.js'
import { useTasks } from '../context/TaskContext.jsx'
import TaskForm from '../components/TaskForm.jsx'

function BoardDetail() {
  const { id } = useParams()
  const board = boards.find((b) => String(b.id) === id)
  const { tasks, addTask } = useTasks()

  if (!board) {
    return <p>Board not found. <Link to="/">Back to boards</Link></p>
  }

  const boardTasks = tasks.filter((t) => t.boardId === board.id)

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
                  {t.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardDetail
