// import { useEffect, useState } from "react";

import type { Todo } from "../../model/Todo";
import { Typography, Box } from "@mui/material";
import TodoCard from "../TodoCard/Todo";
type TodoViewerProps = {
    todos: Todo[];
}
function TodoViewer({ todos }: TodoViewerProps){
    return(
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Todo Viewer
            </Typography>
            <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
            {todos.map((todo) => (
                <TodoCard key={todo._id} todo={todo} />
             ))}</Box>
        </div>
    )
}
export default TodoViewer;