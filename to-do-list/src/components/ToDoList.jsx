import {List} from "./List.jsx";
import {AddToDo} from "./AddToDo.jsx";
import {useState} from "react";
import {ToDoFilter} from "./ToDoFilter.jsx";
import {TO_DO_LIST} from "../constants/index.js";

export const ToDoList = () => {
    const [todos, setTodos] = useState(TO_DO_LIST);

    const [statusFilter, setStatusFilter] = useState(null);

    const handleAdd = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    const handleToggle = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const filteredTodos = statusFilter === null ? todos : todos.filter(todo => todo.completed === statusFilter);


    return <>
        <AddToDo onAdd={handleAdd}/>
        <h2 className="todo__header">ToDo List</h2>
        <ToDoFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter}/>
        <List items={filteredTodos} onDelete={handleDelete} onToggle={handleToggle}/>
    </>
}
