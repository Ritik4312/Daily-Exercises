import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AppList() {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [minRating, setMinRating] = useState("");
  const navigate = useNavigate();

  const fetchApps = async () => {
    const res = await fetch("http://localhost:5000/api/apps");
    const data = await res.json();
    setApps(data);
  };

  useEffect(() => { fetchApps(); }, []);

  const handleSearch = async () => {
    const res = await fetch(`http://localhost:5000/api/apps/search?name=${search}`);
    const data = await res.json();
    setApps(data);
  };

  const handleGenre = async (e) => {
    const val = e.target.value;
    setGenre(val);
    const url = val ? `http://localhost:5000/api/apps/category/${val}` : "http://localhost:5000/api/apps";
    const res = await fetch(url);
    const data = await res.json();
    setApps(data);
  };

  const handleRating = async (e) => {
    const val = e.target.value;
    setMinRating(val);
    const url = val ? `http://localhost:5000/api/apps/filter?minRating=${val}` : "http://localhost:5000/api/apps";
    const res = await fetch(url);
    const data = await res.json();
    setApps(data);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Browse Apps</h2>
      <div className="row g-2 mb-4">
        <div className="col-md-5">
          <input className="form-control" placeholder="Search by name..." value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
        <div className="col-md-3">
          <select className="form-select" value={genre} onChange={handleGenre}>
            <option value="">All Categories</option>
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
        <div className="col-md-2">
          <select className="form-select" value={minRating} onChange={handleRating}>
            <option value="">All Ratings</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>
      {apps.length === 0 ? (
        <p className="text-center text-muted mt-5">No apps found</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {apps.map((app) => (
            <div className="col" key={app._id}>
              <div className="card h-100 shadow-sm" style={{ cursor: "pointer" }}
                onClick={() => navigate(`/apps/${app._id}`)}>
                <div className="card-body">
                  <h5 className="card-title">{app.name}</h5>
                  <p className="card-text text-muted">{app.description}</p>
                  <p className="text-warning fw-bold">⭐ {app.ratings}</p>
                  <p className="text-muted small">Version: {app.version}</p>
                  <span className="badge bg-primary">{app.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AppList;