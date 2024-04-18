import { TodosType } from "@/types";
import React from "react";

interface ItemTodoType {
    todo: TodosType;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

function ItemTodo({ todo, deleteTodo, toggleTodo }: ItemTodoType) {
    const handleSwitch = () => {
        toggleTodo(todo.id);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <div>
            <span
                style={{
                    textDecoration: todo.compeleted ? "line-through" : "none",
                }}
            >
                {todo.content}
            </span>
            <button onClick={handleSwitch}>switch</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    );
}

export default ItemTodo;
