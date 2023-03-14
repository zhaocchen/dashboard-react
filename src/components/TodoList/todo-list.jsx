import React, { Component }  from 'react';

export default function TodoList (props) {
    const { list, onDelete } = props;
    const clickHandler = (id) => {
        onDelete(id);
    }

    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.title}
                <span onClick={() => clickHandler(item.id)}>  🗑  </span>
                </li>
            ))}
        </ul>
    )
}