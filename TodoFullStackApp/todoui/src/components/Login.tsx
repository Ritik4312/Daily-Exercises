import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {    // Implement login logic here
    if(username === 'admin' && password === 'admin') {
      console.log(username,password);
      
      navigate('/todo'); // Redirect to the to-do list page after successful login
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
   
         <TextField
          required
          id="outlined-required"
          label="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br/>
         <TextField
          required
          id="outlined-required"
          label="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <br></br>
        <Button variant="contained" type="submit" onClick={handleLogin}>
          Submit
        </Button>

    </div>
  );
}

export default Login;