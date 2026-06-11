import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    handleAction(action) {
        switch (action.type) {
            case "ADD_TODO":
               this.todos.push(action.payload);
               this.emit("change");
               break;
            default:
                break;
        }
    }
}

    
    const todoStore = new TodoStore();
    dispatcher.register(todoStore.handleAction.bind(todoStore));
    export default todoStore;
