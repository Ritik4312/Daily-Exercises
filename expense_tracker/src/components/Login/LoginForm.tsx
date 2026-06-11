// import {User} from '../Model/user.tsx'
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import { useState } from 'react';
function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
        <div>
            <TextField
            required
            id="outlined-required"
            label="Email"
            type= "email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
        />
        <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="text">Submit</Button>
        </div>)
}
export default Login;