import { useState } from 'react'
import { initialNotifications } from '../data/notifications.js'

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications)

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  return (
    <div>
      <div className="page-header">
        <h1>Notifications</h1>
        <button className="secondary-button" onClick={markAllRead}>Mark all read</button>
      </div>
      <div className="notification-list">
        {notifications.map((n) => (
          <div key={n.id} className={'notification-item' + (n.read ? '' : ' unread')}>
            {n.message}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications
