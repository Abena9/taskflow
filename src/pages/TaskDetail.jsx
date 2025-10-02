import { useParams, Link } from 'react-router-dom'
import { useTasks } from '../context/TaskContext.jsx'
import { boards } from '../data/boards.js'
import CommentList from '../components/CommentList.jsx'

function TaskDetail() {
  const { id } = useParams()
  const { tasks } = useTasks()
  const task = tasks.find((t) => String(t.id) === id)

  if (!task) {
    return <p>Task not found. <Link to="/">Back to boards</Link></p>
  }

  const board = boards.find((b) => b.id === task.boardId)

  return (
    <div>
      <Link to={'/boards/' + task.boardId}>&larr; Back to {board?.name}</Link>
      <h1>{task.title}</h1>
      <p>Status: {task.column} &middot; Priority: {task.priority}</p>
      <CommentList taskId={task.id} />
    </div>
  )
}

export default TaskDetail
