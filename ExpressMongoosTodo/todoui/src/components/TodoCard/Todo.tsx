import { Card, CardContent, Stack, Typography ,Button } from "@mui/material";
import type { Todo } from "../../model/Todo";
interface TodoCardProps {
    todo: Todo;
}
function TodoCard({ todo }: TodoCardProps){
    return(
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {todo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {todo.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Status: {todo.status? "Completed" : "Pending"   }
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="primary">
                        Edit
                    </Button>
                    <Button variant="contained" color="secondary">
                        Delete
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
}
export default TodoCard;