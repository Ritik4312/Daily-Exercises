import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import OwnerLogin from "./pages/OwnerLogin";
import OwnerRegister from "./pages/OwnerRegister";
import AppList from "./pages/AppList";
import AppDetails from "./pages/AppDetails";
import OwnerDashboard from "./pages/OwnerDashboard";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/owner/login" element={<OwnerLogin />} />
        <Route path="/owner/register" element={<OwnerRegister />} />
        <Route path="/apps" element={<AppList />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;