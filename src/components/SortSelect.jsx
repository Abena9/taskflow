function SortSelect({ value, onChange }) {
  return (
    <select className="sort-select" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Sort: Column order</option>
      <option value="due-asc">Due date: Soonest first</option>
      <option value="priority">Priority: High to Low</option>
    </select>
  )
}

export default SortSelect
