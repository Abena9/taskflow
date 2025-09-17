function FilterBar({ status, onStatusChange, statuses }) {
  return (
    <div className="filter-bar">
      <select value={status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">All Statuses</option>
        {statuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar
