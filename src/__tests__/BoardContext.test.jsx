import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BoardProvider, useBoards } from '../context/BoardContext.jsx'

function Probe() {
  const { boards, addBoard } = useBoards()
  return (
    <div>
      <span data-testid="count">{boards.length}</span>
      <button onClick={() => addBoard('New Board', 'desc')}>add</button>
    </div>
  )
}

describe('BoardContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('adds a new board', () => {
    render(
      <BoardProvider>
        <Probe />
      </BoardProvider>
    )
    const before = Number(screen.getByTestId('count').textContent)
    fireEvent.click(screen.getByText('add'))
    expect(Number(screen.getByTestId('count').textContent)).toBe(before + 1)
  })
})
