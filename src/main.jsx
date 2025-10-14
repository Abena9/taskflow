import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
import { CommentProvider } from './context/CommentContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { TeamProvider } from './context/TeamContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TeamProvider>
          <TaskProvider>
            <CommentProvider>
              <App />
            </CommentProvider>
          </TaskProvider>
        </TeamProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
