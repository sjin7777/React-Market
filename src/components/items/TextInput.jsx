import { useState } from "react";

function TextInput(props) {
    const [ data, setData ] = useState("");
    const { text, ph } = props;
    const handleChange = (event) => setData(event.target.value);

    return (
        <div>
            <label htmlFor={text}>{text}</label>
            <input type="text" id={text} value={data} placeholder={ph} onChange={handleChange} />
        </div>
    )
}

export default TextInput;