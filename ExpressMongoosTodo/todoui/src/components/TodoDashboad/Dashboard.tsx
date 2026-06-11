import TodoTaker from "../TodoTaker/TodoTaker";
import TodoViewer from "../TodoViewer/TodoViewer";
import { useEffect, useState } from "react";
import type { Todo } from "../../model/Todo";
import todoService from "../../service/TodoService";

function TodoDashboard(){
    const [todos, setTodos] = useState<Todo[]>([]);
    useEffect(()=>{
        todoService.getTodos().then((data) => {
            setTodos(data);
            console.log("TodoDashboard mounted",data);
        });

    }, [])
    const addTodo = (newTodo: Todo):void => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
    return(
        <div>
            <TodoTaker addTodo={addTodo}/>
            <TodoViewer todos={todos} />
        </div>
    )
}
export default TodoDashboard;