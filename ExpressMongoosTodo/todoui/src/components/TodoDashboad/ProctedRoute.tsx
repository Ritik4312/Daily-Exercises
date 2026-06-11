import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: any) {
  const data = localStorage.getItem("token");
  console.log("from ProtectedRoute:", data);

  if (!data) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
