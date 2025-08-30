import "../index.css";
export const ToDoItem = ({todo}) => {
    return <div className={todo.completed ? "done" : "todo"}>
        <p>{todo.text}</p>
        <button>Delete</button>
        <button> {todo.completed? "Cancel" : "Complete"}</button>
    </div>
}