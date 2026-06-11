
// import {Routes,Route} from "react-router-dom"
// import Header from './components/Header/Header.tsx'
// import Login from './components/Login/Login.tsx'
// import Dashboard from './components/Dashboard/Dashboard.tsx'
// import AdminDashboard from "./components/Admin/Dashboard/adminDashboard.tsx"
// import ROUTES from './routes/routes.ts';
// import UserCard from './components/Day11/PureComponent.tsx'
// import { Suspense,lazy } from 'react'
// const Header = lazy(() => import('./components/Header/Header.tsx'))
// const Login = lazy(() => import('./components/Login/Login.tsx'))
import './App.css'
import ErrorBoundary from './components/Day11/ErrorBoundary';
import UserPage from './components/Day11/UserPage';
import {useState} from 'react'
import Modal from './components/Day11/Modal';
function App() {
  const [open,setOpen] = useState(false);
  return (
    <>
     <h1>Expense Tracker</h1>
     <button onClick={() => setOpen(true)}>Open Modal</button>
     {
      open && <Modal message='Add Expense'></Modal>
     }

    {/* <ErrorBoundary>
      <UserPage/>
    </ErrorBoundary> */}
       
    {/* <Header/>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login/>}/>
      <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
      <Route path ={ROUTES.ADMINDASHBOARD} element = {<AdminDashboard/>}/>
    </Routes> */}
    </>
  )
}

export default App
