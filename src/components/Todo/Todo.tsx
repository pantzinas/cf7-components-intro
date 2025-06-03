import TodoForm from "./TodoForm.tsx";
import {useReducer} from "react";
import TodoList from "./TodoList.tsx";

type TodoProps = {
    id: number;
    text: string;
}

type Action = 
    | {type: "ADD", payload: string}
    | {type: "DELETE", payload: number}

const toDoReducer = (state: TodoProps[], action: Action): TodoProps[] => {
    switch (action.type) {
        case "ADD": {
             const newTodo: TodoProps = {
                id: Date.now(),
                text: action.payload,
            }
            return [...state, newTodo]
        }
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

// We do not follow the exact convention of Pascal case, because there is a relative keywork for comment
// i.e. ToDo: create a function
const Todo = () => {

    const [todos, dispatch] = useReducer(toDoReducer, []);
    console.log(todos);

    return (
        <>
            <div className="max-w-md mx-auto p-6">
                <h1 className="text-center text-2xl mb-4">To-Do List</h1>
                <TodoForm dispatch={dispatch} />
                <TodoList todos={todos} dispatch={dispatch}/>
            </div>

        </>
    )
}

export default Todo;