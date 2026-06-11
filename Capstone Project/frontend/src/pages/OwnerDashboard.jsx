import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OwnerDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [apps, setApps] = useState([]);
  const [msg, setMsg] = useState("");
  const [announceText, setAnnounceText] = useState({});
  const [showComments, setShowComments] = useState({});
  const [showEdit, setShowEdit] = useState({});
  const [editData, setEditData] = useState({});
  const [form, setForm] = useState({
    name: "", description: "", version: "", genre: "games", ratings: ""
  });

  const fetchApps = async () => {
    const res = await fetch("http://localhost:5000/api/owners/apps", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setApps(data);
  };

  useEffect(() => {
    if (!token || role !== "owner") {
      navigate("/owner/login");
    } else {
      fetchApps();
    }
  }, []);

  const handleAdd = async () => {
    const res = await fetch("http://localhost:5000/api/owners/apps", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setMsg(data.message);
    setForm({ name: "", description: "", version: "", genre: "games", ratings: "" });
    fetchApps();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/owners/apps/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchApps();
  };

  const handleVisibility = async (id) => {
    await fetch(`http://localhost:5000/api/owners/apps/${id}/visibility`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchApps();
  };

  const handleAnnounce = async (id) => {
    await fetch(`http://localhost:5000/api/owners/apps/${id}/announce`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ message: announceText[id] })
    });
    setAnnounceText({ ...announceText, [id]: "" });
    fetchApps();
  };

  const handleEdit = async (id) => {
    await fetch(`http://localhost:5000/api/owners/apps/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(editData[id])
    });
    setShowEdit({ ...showEdit, [id]: false });
    fetchApps();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🏪 Owner Dashboard</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="mb-3">➕ Add New App</h5>
        <div className="row g-2">
          <div className="col-md-4">
            <input className="form-control" placeholder="App Name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="col-md-4">
            <input className="form-control" placeholder="Version" value={form.version}
              onChange={(e) => setForm({ ...form, version: e.target.value })} />
          </div>
          <div className="col-md-4">
            <input className="form-control" placeholder="Rating (0-5)" value={form.ratings}
              onChange={(e) => setForm({ ...form, ratings: e.target.value })} />
          </div>
          <div className="col-md-8">
            <input className="form-control" placeholder="Description" value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <div className="col-md-4">
            <select className="form-select" value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}>
              <option value="games">Games</option>
              <option value="beauty">Beauty</option>
              <option value="fashion">Fashion</option>
              <option value="women">Women</option>
              <option value="health">Health</option>
              <option value="social">Social</option>
              <option value="chatting">Chatting</option>
              <option value="education">Education</option>
              <option value="finance">Finance</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="news">News</option>
              <option value="shopping">Shopping</option>
            </select>
          </div>
        </div>
        {msg && <div className="alert alert-success py-2 mt-2">{msg}</div>}
        <button className="btn btn-success mt-3" onClick={handleAdd}>Add App</button>
      </div>

      <h5 className="mb-3">📋 My Apps ({apps.length})</h5>

      {apps.length === 0 ? (
        <p className="text-muted">No apps added yet</p>
      ) : (
        apps.map((app) => (
          <div className="card shadow-sm p-3 mb-3" key={app._id}>
            <h5>{app.name}</h5>
            <p className="text-muted mb-1">{app.description}</p>
            <p className="mb-1">⭐ {app.ratings} | Version: {app.version} | Genre: {app.genre}</p>
            <p className="mb-1">📥 Downloads: {app.downloadCount}</p>
            <p className="mb-2">👁️ Visible: {app.isVisible ? "Yes" : "No"}</p>
            {app.announcement && (
              <div className="alert alert-warning py-1 mb-2">📢 {app.announcement}</div>
            )}
            <div className="d-flex gap-2 flex-wrap mb-2">
              <button className="btn btn-primary btn-sm"
                onClick={() => setShowEdit({ ...showEdit, [app._id]: !showEdit[app._id] })}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(app._id)}>
                Delete
              </button>
              <button className="btn btn-secondary btn-sm" onClick={() => handleVisibility(app._id)}>
                {app.isVisible ? "Hide App" : "Show App"}
              </button>
              <button className="btn btn-warning btn-sm"
                onClick={() => setAnnounceText({ ...announceText, [app._id]: announceText[app._id] !== undefined ? undefined : "" })}>
                Announce
              </button>
              <button className="btn btn-info btn-sm"
                onClick={() => setShowComments({ ...showComments, [app._id]: !showComments[app._id] })}>
                Comments ({app.comments.length})
              </button>
            </div>
            {showEdit[app._id] && (
              <div className="d-flex gap-2 flex-wrap mt-2">
                <input className="form-control form-control-sm w-auto" placeholder="New Name"
                  onChange={(e) => setEditData({ ...editData, [app._id]: { ...editData[app._id], name: e.target.value } })} />
                <input className="form-control form-control-sm w-auto" placeholder="New Version"
                  onChange={(e) => setEditData({ ...editData, [app._id]: { ...editData[app._id], version: e.target.value } })} />
                <input className="form-control form-control-sm w-auto" placeholder="New Rating"
                  onChange={(e) => setEditData({ ...editData, [app._id]: { ...editData[app._id], ratings: e.target.value } })} />
                <button className="btn btn-primary btn-sm" onClick={() => handleEdit(app._id)}>Save</button>
              </div>
            )}
            {announceText[app._id] !== undefined && (
              <div className="input-group mt-2">
                <input className="form-control form-control-sm" placeholder="Type announcement..."
                  value={announceText[app._id]}
                  onChange={(e) => setAnnounceText({ ...announceText, [app._id]: e.target.value })} />
                <button className="btn btn-warning btn-sm" onClick={() => handleAnnounce(app._id)}>Send</button>
              </div>
            )}
            {showComments[app._id] && (
              <div className="mt-2 p-2 bg-light rounded">
                {app.comments.length === 0 ? (
                  <p className="text-muted mb-0">No comments yet</p>
                ) : (
                  app.comments.map((c, i) => (
                    <p key={i} className="mb-1"><strong>{c.userName}:</strong> {c.comment}</p>
                  ))
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default OwnerDashboard;