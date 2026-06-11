
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import type { Todo } from '../model/todo.ts';

interface todoProp{
    todo:Todo
} 
function TodoCard({todo}:todoProp) {
return (<>
   
        <Card key={todo.id}>
         
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {todo.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {todo.description}
              </Typography>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
            </CardActions>
            </CardContent>
             
        </Card>
</>)
}
export default TodoCard;