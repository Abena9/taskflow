import { createContext, useContext, useState } from 'react'

const CommentContext = createContext(null)

const initialComments = [
  { id: 1, taskId: 1, author: 'Selam A.', text: 'Let\u2019s align on tone before Friday.' },
  { id: 2, taskId: 1, author: 'Robel M.', text: 'Sent a draft in Slack.' },
]

export function CommentProvider({ children }) {
  const [comments, setComments] = useState(initialComments)

  function addComment(taskId, author, text) {
    setComments((prev) => [...prev, { id: Date.now(), taskId, author, text }])
  }

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  )
}

export function useComments() {
  return useContext(CommentContext)
}
