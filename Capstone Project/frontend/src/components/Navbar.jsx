import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">🎮 Play Store</Link>
      <div className="ms-auto d-flex align-items-center gap-2 flex-wrap">
        {name ? (
          <>
            <span className="text-white me-2">Hi, {name} ({role})</span>
            {role === "owner" && <Link className="btn btn-outline-light btn-sm" to="/owner/dashboard">Dashboard</Link>}
            {role === "user" && <Link className="btn btn-outline-light btn-sm" to="/apps">Browse Apps</Link>}
            <Link className="btn btn-outline-warning btn-sm" to="/notifications">🔔 Notifications</Link>
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light btn-sm" to="/apps">Browse Apps</Link>
            <Link className="btn btn-outline-light btn-sm" to="/user/login">User Login</Link>
            <Link className="btn btn-outline-light btn-sm" to="/owner/login">Owner Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;