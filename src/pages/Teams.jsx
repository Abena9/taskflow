import { useState } from 'react'
import { useTeams } from '../context/TeamContext.jsx'

function Teams() {
  const { teams, addMember, removeMember } = useTeams()
  const [newMember, setNewMember] = useState({})

  function handleAdd(teamId) {
    const name = (newMember[teamId] || '').trim()
    if (!name) return
    addMember(teamId, name)
    setNewMember((prev) => ({ ...prev, [teamId]: '' }))
  }

  return (
    <div>
      <h1>Teams</h1>
      <div className="board-grid">
        {teams.map((t) => (
          <div key={t.id} className="team-card">
            <h3>{t.name}</h3>
            <p className="board-description">{t.members.length} members</p>
            <ul className="team-members">
              {t.members.map((m) => (
                <li key={m}>
                  {m}
                  <button className="link-button" onClick={() => removeMember(t.id, m)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="team-add-member">
              <input
                placeholder="Add member"
                value={newMember[t.id] || ''}
                onChange={(e) => setNewMember((prev) => ({ ...prev, [t.id]: e.target.value }))}
              />
              <button onClick={() => handleAdd(t.id)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams
