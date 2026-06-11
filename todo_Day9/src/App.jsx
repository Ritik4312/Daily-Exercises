import Header from './components/Header'
import Login1 from './components/Login1'
import TodoList from './components/TodoList'
import { Routes, Route } from "react-router-dom"
import User from './components/user'
import withLoader from './components/withLoader'
// for Flux
import todoStore from './fluxTodo/stores/TodoStore'
import { useEffect } from 'react'
import { addTodo } from './fluxTodo/action/actionTodo'
const UserWithLoader = withLoader(User)
function App() {
  
//   return (
//     <UserWithLoader name= "Ram"/>
//     // <>
//     // <Header/>
//     // <Routes>
//     //   <Route path = "/" element = {<Login1/>}/>
//     //   <Route path = "/TodoList" element = {<TodoList/>}/>
//     // </Routes>
//     // </>
   
//   )
// }

// export default App

// For Flux
const [todos,setTodos] = useState(todoStore.getTodos())
const [text,setText] = useState('')
useEffect(()=>{
    const updateTodos = () => {
        setTodos(todoStore.getTodos())
    }
    todoStore.on('change',updateTodos)
    return () => {
        todoStore.removeListener('change',updateTodos)
    }
    // eslint-disable-next-line
},[])
return (
  <div>
    <Header/>
    <h2>Flux Todo App</h2>
    <input value={text} onChange={(e) => setText(e.target.value)}/>
    <button onClick={() => {addTodo(text); setText(" ")}}>Add Todo</button>
    <ul>
      {todos.map(todo => <li key={index}>{todo}</li>)}
    </ul>
    </div>
)
}
export default App