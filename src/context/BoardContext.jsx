import { createContext, useContext, useState, useEffect } from 'react'
import { boards as initialBoards } from '../data/boards.js'

const BoardContext = createContext(null)
const STORAGE_KEY = 'taskflow.boards'
const palette = ['#4c6ef5', '#12b886', '#f76707', '#e64980', '#7048e8']

export function BoardProvider({ children }) {
  const [boards, setBoards] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : initialBoards
    } catch {
      return initialBoards
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(boards))
  }, [boards])

  function addBoard(name, description) {
    const color = palette[boards.length % palette.length]
    setBoards((prev) => [
      ...prev,
      { id: Date.now(), name, description, color, taskCount: 0, status: 'Active' },
    ])
  }

  return (
    <BoardContext.Provider value={{ boards, addBoard }}>
      {children}
    </BoardContext.Provider>
  )
}

export function useBoards() {
  return useContext(BoardContext)
}
