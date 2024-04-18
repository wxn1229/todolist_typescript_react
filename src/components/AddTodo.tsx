import { useRef } from "react";

interface AddTodosType {
    addTodos: (content: string) => void;
}

function AddTodo({ addTodos }: AddTodosType) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (inputRef.current) {
            addTodos(inputRef.current.value);
            inputRef.current.value = "";
        }
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleButton}>AddTodo</button>
        </div>
    );
}

export default AddTodo;
