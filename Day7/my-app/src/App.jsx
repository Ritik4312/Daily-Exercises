import {useState,useEffect } from 'react'
import todoStore from './stores/TodoStore'
import { addTodo } from './action/actionTodo'

function App() {
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