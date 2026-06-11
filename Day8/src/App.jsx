import Header from "./components/Header"
import Login from "./components/Login"
import AddProduct from "./components/addProduct"
import { Routes,Route} from 'react-router-dom'
import Student from "./components/Student"
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/addProduct' element = {<AddProduct/>}/>
      </Routes>
      {/* <Login/>
      <Student name = "aa" age = "sdf" /> */}
     </div>
  )
}

export default App
