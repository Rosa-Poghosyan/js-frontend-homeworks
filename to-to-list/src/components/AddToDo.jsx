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
        <p>Add Todo</p>
        {error && <div style={{color: "red"}}>{error}</div>}
        <input type="text" placeholder="Enter todo here..." value={text}
               onChange={e => setText(e.target.value)}>
        </input>
        <button onClick={handleSave}>Save</button>
    </>
}