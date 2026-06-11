
import type { Todo } from "../model/Todo";

const getTodos = async ():Promise<Todo[]> => {
    const response = await fetch('http://localhost:3000/api/todos');
    const data: Todo[] = await response.json();
    console.log(data);
    return data;
}
const postTodo = async (todo: Todo) => {
    await fetch('http://localhost:3000/api/todo',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(todo)
    })  
    .then(response => response.json())
    .then(data => {
        console.log('Todo created:', data);
    })
    .catch(error => {
        console.error('Error creating todo:', error);
    }); 
}
export default { getTodos , postTodo };