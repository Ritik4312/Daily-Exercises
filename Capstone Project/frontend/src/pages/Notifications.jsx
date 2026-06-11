import { useState, useEffect } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    const res = await fetch("http://localhost:5000/api/apps/notifications");
    const data = await res.json();
    setNotifications(data);
  };

  useEffect(() => { fetchNotifications(); }, []);

  return (
    <div className="container mt-4" style={{ maxWidth: "700px" }}>
      <h2 className="text-center mb-4">🔔 Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-center text-muted">No notifications yet</p>
      ) : (
        notifications.map((n, i) => (
          <div className="card shadow-sm p-3 mb-3 border-start border-warning border-3" key={i}>
            <h5 className="mb-1">📱 {n.appName}</h5>
            <p className="mb-1">📢 {n.announcement}</p>
            <small className="text-muted">{new Date(n.updatedAt).toDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default Notifications;