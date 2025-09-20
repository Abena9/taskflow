import { useState, useMemo } from 'react'
import { boards, boardStatuses } from '../data/boards.js'
import { Link } from 'react-router-dom'
import BoardCard from '../components/BoardCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import FilterBar from '../components/FilterBar.jsx'

function Boards() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return boards.filter((b) => {
      const matchesQuery = !q || b.name.toLowerCase().includes(q)
      const matchesStatus = !status || b.status === status
      return matchesQuery && matchesStatus
    })
  }, [query, status])

  return (
    <div>
      <h1>Boards</h1>
      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} placeholder="Search boards" />
        <FilterBar status={status} onStatusChange={setStatus} statuses={boardStatuses} />
      </div>
      <div className="board-grid">
        {filtered.map((b) => (
          <BoardCard key={b.id} board={b} />
        ))}
      </div>
    </div>
  )
}

export default Boards
