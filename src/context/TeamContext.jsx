import { createContext, useContext, useState } from 'react'
import { teams as initialTeams } from '../data/teams.js'

const TeamContext = createContext(null)

export function TeamProvider({ children }) {
  const [teams, setTeams] = useState(initialTeams)

  function addMember(teamId, name) {
    setTeams((prev) =>
      prev.map((t) => (t.id === teamId ? { ...t, members: [...t.members, name] } : t))
    )
  }

  function removeMember(teamId, name) {
    setTeams((prev) =>
      prev.map((t) =>
        t.id === teamId ? { ...t, members: t.members.filter((m) => m !== name) } : t
      )
    )
  }

  return (
    <TeamContext.Provider value={{ teams, addMember, removeMember }}>
      {children}
    </TeamContext.Provider>
  )
}

export function useTeams() {
  return useContext(TeamContext)
}
