//import './App.css'
import Header from './components/header/header'
import Login from './components/login/login'
import DisplayExpense from './components/dashboard/displayExpense'
import { Route,Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path = "/" element={<Login/>}></Route>
      <Route path = "/displayExp" element = {<DisplayExpense/>}></Route>
    </Routes>   
    </>
  )
}

export default App
