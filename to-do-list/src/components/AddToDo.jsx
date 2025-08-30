import {useState} from "react";

export const AddToDo = ({onAdd}) => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const handleSave = () => {
        if((text.trim()).length === 0) {
            return setError("Text is required");
        }
        setError("");
        onAdd(text);
        setText("");
    }

    return <>
        <div className="add-todo">
            <p>Add Todo</p>
            {error && <div className="error">{error}</div>}
            <input
                type="text"
                placeholder="Enter todo here..."
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    </>
}