import "../index.css";

export const ToDoItem = ({todo, onDelete, onToggle}) => {
    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleToggle = () => {
        onToggle(todo.id);
    };

    return <div className={todo.completed ? "done" : "todo"}>
        <p>{todo.text}</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleToggle}> {todo.completed ? "Cancel" : "Complete"}</button>
    </div>
}