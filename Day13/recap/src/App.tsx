
import './App.css'
import DisplayData from './components/displayData'
import UserListWithLoading from './components/UserListComponent'


function App() {
  return (
    <>
    {/* // <DisplayData></DisplayData> */}
    <UserListWithLoading
    isLoading = {true}
    users = {["user1","user2","user3"]}
    ></UserListWithLoading>
    </>
  )
}

export default App
