import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [ratingMsg, setRatingMsg] = useState("");

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");

  const fetchApp = async () => {
    const res = await fetch(`http://localhost:5000/api/apps/${id}`);
    const data = await res.json();
    setApp(data);
  };

  useEffect(() => { fetchApp(); }, []);

  const handleDownload = async () => {
    const res = await fetch(`http://localhost:5000/api/apps/${id}/download`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setMessage(data.message);
    fetchApp();
  };

  const handleComment = async () => {
    if (!comment) return;
    await fetch(`http://localhost:5000/api/apps/${id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ comment, userName })
    });
    setComment("");
    fetchApp();
  };

  const handleRate = async (star) => {
    setSelectedRating(star);
    const res = await fetch(`http://localhost:5000/api/apps/${id}/rate`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ rating: star })
    });
    const data = await res.json();
    setRatingMsg(data.message);
    fetchApp();
  };

  if (!app) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4" style={{ maxWidth: "650px" }}>
      <button className="btn btn-link ps-0 mb-3" onClick={() => navigate("/apps")}>← Back</button>

      <div className="card shadow-sm p-4">
        <h2 className="mb-3">{app.name}</h2>
        <p><strong>Description:</strong> {app.description}</p>
        <p><strong>Version:</strong> {app.version}</p>
        <p><strong>Genre:</strong> {app.genre}</p>
        <p><strong>Average Rating:</strong> ⭐ {app.ratings} ({app.userRatings.length} ratings)</p>
        <p><strong>Downloads:</strong> {app.downloadCount}</p>
        <p><strong>Released:</strong> {new Date(app.releaseDate).toDateString()}</p>

        {app.announcement && (
          <div className="alert alert-success py-2">📢 {app.announcement}</div>
        )}
        {message && <div className="alert alert-success py-2">{message}</div>}

        {token && (
          <button className="btn btn-success mt-2" onClick={handleDownload}>
            ⬇️ Download
          </button>
        )}
      </div>

      {/* Rating Section */}
      {token && (
        <div className="card shadow-sm p-4 mt-4">
          <h5 className="mb-3">⭐ Rate this App</h5>
          <div className="d-flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`btn ${selectedRating >= star ? "btn-warning" : "btn-outline-warning"}`}
                onClick={() => handleRate(star)}
                style={{ fontSize: "20px", padding: "4px 10px" }}
              >
                ★
              </button>
            ))}
          </div>
          {selectedRating > 0 && (
            <small className="text-muted mt-2">You rated: {selectedRating}/5</small>
          )}
          {ratingMsg && <div className="alert alert-success py-2 mt-2">{ratingMsg}</div>}
        </div>
      )}

      {/* Comments Section */}
      <div className="card shadow-sm p-4 mt-4">
        <h5 className="mb-3">💬 Comments ({app.comments.length})</h5>
        {token && (
          <div className="input-group mb-3">
            <input className="form-control" placeholder="Write a comment..."
              value={comment} onChange={(e) => setComment(e.target.value)} />
            <button className="btn btn-primary" onClick={handleComment}>Post</button>
          </div>
        )}
        {app.comments.length === 0 ? (
          <p className="text-muted">No comments yet</p>
        ) : (
          app.comments.map((c, i) => (
            <div className="border rounded p-2 mb-2" key={i}>
              <strong>{c.userName}: </strong>{c.comment}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AppDetails;