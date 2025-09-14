import { useState, useMemo } from 'react'
import { boards } from '../data/boards.js'
import BoardCard from '../components/BoardCard.jsx'
import SearchBar from '../components/SearchBar.jsx'

function Boards() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return boards
    return boards.filter((b) => b.name.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      <h1>Boards</h1>
      <SearchBar value={query} onChange={setQuery} placeholder="Search boards" />
      <div className="board-grid">
        {filtered.map((b) => (
          <BoardCard key={b.id} board={b} />
        ))}
      </div>
    </div>
  )
}

export default Boards
