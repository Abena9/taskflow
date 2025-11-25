import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TaskProvider, useTasks } from '../context/TaskContext.jsx'

function Probe() {
  const { tasks, moveTask } = useTasks()
  const first = tasks[0]
  return (
    <div>
      <span data-testid="column">{first.column}</span>
      <button onClick={() => moveTask(first.id, 'Done')}>move</button>
    </div>
  )
}

describe('TaskContext', () => {
  it('moves a task to a new column', () => {
    render(
      <TaskProvider>
        <Probe />
      </TaskProvider>
    )
    fireEvent.click(screen.getByText('move'))
    expect(screen.getByTestId('column').textContent).toBe('Done')
  })
})
