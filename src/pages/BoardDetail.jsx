import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useBoards } from '../context/BoardContext.jsx'
import { columns } from '../data/tasks.js'
import { useTasks } from '../context/TaskContext.jsx'
import TaskForm from '../components/TaskForm.jsx'
import TaskCardBadge from '../components/TaskCardBadge.jsx'
import SortSelect from '../components/SortSelect.jsx'

const priorityRank = { High: 0, Medium: 1, Low: 2 }

function BoardDetail() {
  const { id } = useParams()
  const { boards } = useBoards()
  const board = boards.find((b) => String(b.id) === id)
  const { tasks, addTask, moveTask } = useTasks()
  const [sort, setSort] = useState('')

  if (!board) {
    return <p>Board not found. <Link to="/">Back to boards</Link></p>
  }

  const boardTasks = useMemo(() => {
    const filtered = tasks.filter((t) => t.boardId === board.id)
    const sorted = [...filtered]
    if (sort === 'due-asc') {
      sorted.sort((a, b) => (a.dueDate || '9999') > (b.dueDate || '9999') ? 1 : -1)
    }
    if (sort === 'priority') {
      sorted.sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority])
    }
    return sorted
  }, [tasks, board.id, sort])

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
      <div className="page-header">
        <h1>{board.name}</h1>
        <SortSelect value={sort} onChange={setSort} />
      </div>
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
