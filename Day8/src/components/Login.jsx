import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState , useRef} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus();
    }
    const User = {
        id : 0,
        username : "",
        password : ""
    }
    const [users,setUsers] = useState([])
    // loding data in useEffect
        useEffect(() => {
        fetch('http://localhost:3000/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        },[])
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [errors,setErrors] = useState({});
    
  const handleSubmit = () => {
    users.forEach(element => {
        if(element.username === username && element.password === password)
            navigate("/addProduct")
        })      
    setPassword("");
    setUserName("");
  }
  const validate = () => {
    if(username.length<=3){
        return {username:"UserName is not valid"}
    }
    else if(password.length<=3){
        return {password:"Password is not valid"}
    }
    else{
        return {}
    }
  }
  return (
    <div>
        <br></br>
        <h1>Login</h1>
         <input type="text" ref = {inputRef} placeholder='check'/>
         <TextField
         
          required
          id="outlined-required"
          label="User Name"
          value={username}
          error = {errors.username}
          helperText = {errors.username}
          type="text"
          onChange={(e) => {
             setUserName(e.target.value); 
             setErrors(validate());
            }}
        />
        <br></br>
        <br></br>
        <TextField
          required
          id="outlined-required"
          type="password"
          label="Password"
          value={password}
          error = {errors.password}
          helperText = {errors.password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors(validate());
          }}
        />     
        <br></br>
        <br></br>
        
       <Button variant="outlined" onClick = {handleSubmit}>Submit</Button>
      
       <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default Login