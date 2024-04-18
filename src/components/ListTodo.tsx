import ItemTodo from "./ItemTodo";
import { TodosType } from "@/types";

interface ListTodoType {
    todos: TodosType[];
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

function ListTodo({ todos, deleteTodo, toggleTodo }: ListTodoType) {
    return (
        <div>
            <h2>List</h2>
            {todos.map((item) => (
                <ItemTodo
                    key={item.id}
                    todo={item}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                ></ItemTodo>
            ))}
        </div>
    );
}

export default ListTodo;
