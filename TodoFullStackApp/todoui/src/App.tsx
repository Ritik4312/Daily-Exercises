
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Todos from './components/Todos'
import Login from './components/Login'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todo" element={<Todos />} />
    </Routes>
      
    </>
  )
}

export default App
