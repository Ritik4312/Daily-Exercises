import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'

function Header(){
    const navigte = useNavigate();
    return(
      
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <Button color="inherit" onClick={()=> navigte('/')}>Home</Button>
          <Button color="inherit" onClick={()=> navigte('/dashboard')}>Dashboard</Button>
          <Button color="inherit" onClick={()=> navigte('/login')}>Login</Button>
          <Button color="inherit" onClick={()=> {
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            localStorage.removeItem("token");
            navigte('/login');
          }}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
 
    )
}
export default Header;
