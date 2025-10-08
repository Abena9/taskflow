import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Boards from './pages/Boards.jsx'
import BoardDetail from './pages/BoardDetail.jsx'
import TaskDetail from './pages/TaskDetail.jsx'
import Teams from './pages/Teams.jsx'
import Notifications from './pages/Notifications.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Layout>
              <Routes>
                <Route path="/" element={<Boards />} />
                <Route path="/boards/:id" element={<BoardDetail />} />
                <Route path="/tasks/:id" element={<TaskDetail />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
