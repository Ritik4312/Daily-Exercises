import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-2">🎮 Welcome to Play Store</h1>
      <p className="text-muted mb-5">Discover and manage your favorite apps</p>
      <div className="row justify-content-center gap-4">
        <div className="col-md-4 border rounded-3 p-4 shadow-sm bg-white">
          <h4 className="mb-2">👤 User</h4>
          <p className="text-muted mb-4">Browse and download apps</p>
          <Link className="btn btn-primary me-2" to="/user/login">Login</Link>
          <Link className="btn btn-outline-primary" to="/user/register">Register</Link>
        </div>
        <div className="col-md-4 border rounded-3 p-4 shadow-sm bg-white">
          <h4 className="mb-2">🫅 Owner</h4>
          <p className="text-muted mb-4">Manage and publish your apps</p>
          <Link className="btn btn-success me-2" to="/owner/login">Login</Link>
          <Link className="btn btn-outline-success" to="/owner/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;