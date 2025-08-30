import {ToDoItem} from "./ToDoItem.jsx";
import "../index.css";

export const List = ({items, onDelete, onToggle}) => {

    return <>
        <div className="todo-list">
            <ul>
                {items.map(item => (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        todo={item}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        </div>
    </>
}

