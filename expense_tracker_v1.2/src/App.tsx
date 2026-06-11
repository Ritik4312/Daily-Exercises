
import {Routes,Route} from "react-router-dom"
import Header from './components/Header/Header.tsx'
import Login from './components/Login/Login.tsx'
import Dashboard from './components/Dashboard/Dashboard.tsx'
import AdminDashboard from "./components/Admin/Dashboard/adminDashboard.tsx"
import ROUTES from './routes/routes.ts';
import './App.css'
function App() {
  return (
    <>   
    <Header/>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login/>}/>
      <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
      <Route path ={ROUTES.ADMINDASHBOARD} element = {<AdminDashboard/>}/>
    </Routes>
    </>
  )
}

export default App
