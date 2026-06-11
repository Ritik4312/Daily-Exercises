import Todo from './Todo.jsx'
import { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


function TodoList() {
    const [todos,setTodos] = useState([])
    const [title,setTitle] = useState("")
    const [task,setTask] = useState("")
    useEffect(() => {
        fetch('http://localhost:8080/Todos')
        .then((res) => res.json())
        .then((data) => setTodos(data))
    },[])
    const handleOnClick = () => {
        fetch('http://localhost:8080/Todos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Title:title,
                Task:task
            })
        })
        setTodos([...todos,{Title:title,Task:task}])
        setTitle("")
        setTask("")
    }
    return (
         <>
           <h1>Enter Task </h1>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate autoComplete="off">
            <TextField id='standard-basic' label="Title" variant="standard"
                onChange={(e)=>setTitle(e.target.value)} value = {title}/>
            <TextField id='standard-basic' label="Task" variant="standard"
                onChange={(e)=>setTask(e.target.value)} value = {task}/>
            </Box>
            <center>
                <Button variant="contained" onClick = {handleOnClick}>Submit</Button>
            </center>
            
                 {
                todos.map((ele) => (
                    <Todo id = {ele.id} Title ={ele.Title} Task = {ele.Task}/>
                ))
        }    
        </>
      
)
}

export default TodoList