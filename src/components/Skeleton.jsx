function Skeleton({ count = 3 }) {
  return (
    <div className="board-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card" />
      ))}
    </div>
  )
}

export default Skeleton
