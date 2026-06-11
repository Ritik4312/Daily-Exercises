import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import TodoDashboard from './components/TodoDashboad/Dashboard' 
import ProtectedRoute from './components/TodoDashboad/ProctedRoute'
import './App.css'

function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><TodoDashboard/></ProtectedRoute>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
            </>
  )
}

export default App
