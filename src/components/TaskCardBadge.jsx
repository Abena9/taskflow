function TaskCardBadge({ assignee }) {
  if (!assignee) return null
  const initials = assignee
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)

  return (
    <span className="assignee-badge" title={assignee} role="img" aria-label={'Assigned to ' + assignee}>
      {initials}
    </span>
  )
}

export default TaskCardBadge
