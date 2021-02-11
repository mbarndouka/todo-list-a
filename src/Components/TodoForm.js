import React, {useState, useEffect, useRef} from "react"
import {RiAddCircleFill}from 'react-icons/ri'


function TodoForm(props) {
    const [input, setInput] = useState('');


    const inputRef = useRef(null)

    useEffect (() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
       <form className="todo-form" onSubmit={handleSubmit}>
           <input type="text" 
           placeholder="Tâche à ajouter" 
           value={input}
           name="text" 
           className='todo-input'
           onChange={handleChange}
           ref={inputRef}
           />
           <button className="todo-button">Ajouter</button>
       </form>
    )
}

export default TodoForm 