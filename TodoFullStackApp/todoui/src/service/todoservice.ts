
import type { Todo } from "../model/todo";

async function getTodos():Promise<Todo[]> {
    let todos:Todo[] = [];
    // call backend API to get the list of todos
    await fetch('http://localhost:3000/api/todos')
    .then((response) => response.json())
    .then((data) => {
        todos.push(...data);
    })
    .catch((error) => {
        console.error('Error fetching todos:', error);
        return [];
    });
    return todos;
}
async function addTodo(title:string,description:string,completed:string):Promise<string> {
    const todo:Todo = {
        id:0,
        title: title,
        description: description,
        completed: completed.toLowerCase() === 'true'? true : false
    }
    console.log(todo);
    await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Todo added successfully:', data);  
    })
    return "Todo added successfully";
}
export { getTodos, addTodo };