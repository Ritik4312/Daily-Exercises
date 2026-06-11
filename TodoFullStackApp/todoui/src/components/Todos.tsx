import { useEffect,useState } from 'react';
import {getTodos, addTodo } from '../service/todoservice.ts'
import type { Todo } from '../model/todo.ts';
import TodoCard from './Todo.tsx';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo,setTodo] = useState<Todo | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
   
  // Add todo Function
  const handleAddTodo = () => {
    const data = addTodo(title, description,status);
    console.log("status = ",data);
    const todo:Todo = {
      id:0,
      title: title,
      description: description,
      completed: status.toLowerCase() === 'true' ? true : false
    };
    setTodo(todo);
    setTodos([...todos, todo]);
    setTitle('');
    setDescription('');
    setStatus('');
  }
  useEffect(() => {
   getTodos().then((todos) => {
    setTodos(todos);
    })  
  }, []);


  return (
    <div className="todo">
      <br/>
               <TextField id="outlined-required" label="Title" value={title} 
               onChange={(e) => setTitle(e.target.value)}
              />
          
               <TextField
           
                id="outlined-required"
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              
               <TextField
              
                id="outlined-required"
                label="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <br/>
              <br></br>
              <Button variant="contained" type="submit" onClick={handleAddTodo}>
                Add Todo
              </Button>



      <h2>Todo List</h2>
       <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {/* Todo list content will go here */}
        {todos.map((todo) => (
         <TodoCard key={todo.id} todo={todo} />
        ))}
        </Box>
    </div>
  );
}

export default Todos;