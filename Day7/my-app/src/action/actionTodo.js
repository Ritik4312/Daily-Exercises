import dispatcher from "../dispatcher";

export function addTodo(text) {
    dispatcher.dispatch({
        type: 'ADD_TODO',
        payload: text,
    })
}