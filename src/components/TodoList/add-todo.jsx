import React, { Component }  from 'react';

export default function AddTodo ({ onAdd }) {
    const inputRef = React.createRef();
    const handleClick = () => {
        let value = inputRef.current.value.trim();
        if (value) {
            onAdd(value);
            inputRef.current.value = '';
        }
    }

    return (
        <React.Fragment>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Add</button>
        </React.Fragment>
    )
}