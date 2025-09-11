import { boards } from '../data/boards.js'
import BoardCard from '../components/BoardCard.jsx'

function Boards() {
  return (
    <div>
      <h1>Boards</h1>
      <div className="board-grid">
        {boards.map((b) => (
          <BoardCard key={b.id} board={b} />
        ))}
      </div>
    </div>
  )
}

export default Boards
