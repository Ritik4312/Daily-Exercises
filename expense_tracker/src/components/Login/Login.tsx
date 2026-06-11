
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../service/UserService';
import type {User} from "../model/user";
import "./Login.css";
import ROUTES from "../../routes/routes"

function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
   const handleOnClick = async () => {
        let result : User;
        result= await login(email,password);
        if(result.firstName === "admin")
            navigate(ROUTES.ADMINDASHBOARD)
        else
            navigate(ROUTES.DASHBOARD)
        
    }


    return(
        <div id = "LoginForm">
            <TextField
            required
            id="outlined-required"
            label="Email"
            type= "email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue = "Enter Your Email"
            
        />
        <br/>
        <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue = "Enter Your Password"
        />
        <br />
        <Button variant="text" onClick={handleOnClick}>Submit</Button>
       
        </div>)
}
export default Login;