import {ToDoItem} from "./ToDoItem.jsx";
import "../index.css";

export const List = ({items}) => {

    return <>
        <div className="list">
            <ul>
                {items.map(item => (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        todo={item}
                    />
                ))}
            </ul>
        </div>
    </>
}