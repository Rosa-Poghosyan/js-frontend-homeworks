import {List} from "./List.jsx";
import {AddToDo} from "./AddToDo.jsx";
import {useState} from "react";
import {ToDoFilter} from "./ToDoFilter.jsx";

export const ToDoList = () => {
    const [todos, setTodos] = useState([
        {id: 101, text: 'Learn React', completed: false},
        {id: 102, text: 'Build a ToDo App', completed: true},
        {id: 103, text: 'Profit!', completed: false},
    ]);
    const handleAdd = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }
    return <>
        <AddToDo onAdd={handleAdd}/>
        <List items={todos}/>
        <ToDoFilter/>
    </>
}
