import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [errors,setErrors] = useState({})

    const navigate = useNavigate();
    const handleOnClick = () => {
        if(userName === "admin" && password === "admin"){
             navigate("/TodoList")
        }
    }
   const validate = () => {
    if(userName.length<=3){
        return {userName:"UserName is not valid"}
    }
    else if(password.length<=3){
        return {password:"Password is not valid"}
    }
    else{
        return {}
    }
   }
    
    return (
        <>
            <h1>Login</h1>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate autoComplete="off">
                <TextField 
                    id='standard-basic'
                    label="User Name" 
                    variant="standard"
                    onChange={(e)=>{
                        setUserName(e.target.value)
                        setErrors(validate())}} 
                    value = {userName}
                    error = {errors.userName}
                    helperText = {errors.userName}  
                    />
                <TextField 
                    id='standard-basic'
                    label="Password" 
                    variant="standard"
                    type='Password'
                    error = {errors.password}
                    helperText = {errors.password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                        setErrors(validate())
                    }} 
                    value={password}/>
                    
            </Box>
            <center>
            <Button variant="contained" onClick = {handleOnClick}>Submit</Button>
             </center>
        </>
    )
}
export default Login