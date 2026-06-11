import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

function Todo(props) {
    return (
         <Card key={props.id} sx={{ width: 250,boxShadow:3 }}>
     <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {props.Title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {props.Task}
              </Typography>
            </CardContent>
            </Card>
 )
}

export default Todo