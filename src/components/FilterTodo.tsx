import { Dispatch, SetStateAction } from "react";

interface FilterTodoType {
    setActive: Dispatch<SetStateAction<string>>;
}

function FilterTodo({ setActive }: FilterTodoType) {
    return (
        <div>
            <button
                onClick={() => {
                    setActive("all");
                }}
            >
                All
            </button>
            <button
                onClick={() => {
                    setActive("compeleted");
                }}
            >
                compeleted
            </button>
            <button
                onClick={() => {
                    setActive("doing");
                }}
            >
                doing
            </button>
        </div>
    );
}

export default FilterTodo;
