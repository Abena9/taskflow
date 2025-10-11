import { teams } from '../data/teams.js'

function Teams() {
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
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams
