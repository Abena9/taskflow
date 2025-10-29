import { useState, useMemo } from 'react'
import { boards, boardStatuses } from '../data/boards.js'
import BoardCard from '../components/BoardCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import FilterBar from '../components/FilterBar.jsx'
import Pagination from '../components/Pagination.jsx'

const PAGE_SIZE = 3

function Boards() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return boards.filter((b) => {
      const matchesQuery = !q || b.name.toLowerCase().includes(q)
      const matchesStatus = !status || b.status === status
      return matchesQuery && matchesStatus
    })
  }, [query, status])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function updateFilter(setter) {
    return (value) => {
      setter(value)
      setPage(1)
    }
  }

  return (
    <div>
      <h1>Boards</h1>
      <div className="toolbar">
        <SearchBar value={query} onChange={updateFilter(setQuery)} placeholder="Search boards" />
        <FilterBar status={status} onStatusChange={updateFilter(setStatus)} statuses={boardStatuses} />
      </div>
      <div className="board-grid">
        {paged.map((b) => (
          <BoardCard key={b.id} board={b} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

export default Boards
