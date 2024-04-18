"use client";
import AddTodo from "@/components/AddTodo";
import FilterTodo from "@/components/FilterTodo";
import ListTodo from "@/components/ListTodo";
import { useState } from "react";
import { TodosType } from "@/types";

export default function Home() {
    const [todos, setTodos] = useState<TodosType[]>([]);
    const [active, setActive] = useState("all");

    const addTodos = (content: string) => {
        let newTodo: TodosType = {
            id: Date.now(),
            content: content,
            compeleted: false,
        };

        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((item) => item.id != id));
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return { ...item, compeleted: !item.compeleted };
                }
                return item;
            })
        );
    };

    const getFilterTodo = () => {
        switch (active) {
            case "all":
                return todos;
            case "compeleted":
                return todos.filter((item) => item.compeleted);
            case "doing":
                return todos.filter((item) => !item.compeleted);

            default:
                return todos;
        }
    };

    return (
        <div>
            <h1>TodoList</h1>
            <AddTodo addTodos={addTodos}></AddTodo>
            <ListTodo
                todos={getFilterTodo()}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            ></ListTodo>
            <FilterTodo setActive={setActive}></FilterTodo>
        </div>
    );
}
