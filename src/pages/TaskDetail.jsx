import { useParams, Link } from 'react-router-dom'
import { useTasks } from '../context/TaskContext.jsx'
import { useTeams } from '../context/TeamContext.jsx'
import { boards } from '../data/boards.js'
import CommentList from '../components/CommentList.jsx'

function TaskDetail() {
  const { id } = useParams()
  const { tasks, assignTask } = useTasks()
  const { teams } = useTeams()
  const task = tasks.find((t) => String(t.id) === id)

  if (!task) {
    return <p>Task not found. <Link to="/">Back to boards</Link></p>
  }

  const board = boards.find((b) => b.id === task.boardId)
  const allMembers = [...new Set(teams.flatMap((t) => t.members))]

  return (
    <div>
      <Link to={'/boards/' + task.boardId}>&larr; Back to {board?.name}</Link>
      <h1>{task.title}</h1>
      <p>Status: {task.column} &middot; Priority: {task.priority}</p>
      <label className="assignee-select">
        Assignee
        <select value={task.assignee || ''} onChange={(e) => assignTask(task.id, e.target.value || null)}>
          <option value="">Unassigned</option>
          {allMembers.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </label>
      <CommentList taskId={task.id} />
    </div>
  )
}

export default TaskDetail
