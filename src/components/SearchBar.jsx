function SearchBar({ value, onChange, placeholder }) {
  return (
    <label className="visually-hidden" htmlFor="board-search">
      {placeholder || 'Search'}
      <input
        id="board-search"
        type="text"
        className="search-bar"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Search...'}
      />
    </label>
  )
}

export default SearchBar
