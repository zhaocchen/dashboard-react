
import React, { Component, useState }  from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';

export default function () {
   const [list, setList] = useState([
      {
         id: 1,
         title: 'Learn React',
         completed: false
      }
   ]);

   const addHandler = (text) => {
      const newItem = {
         id: (Math.random() * 10000).toFixed(0),
         title: text,
         completed: false
      };
      setList([...list, newItem]);
   }

   const deleteHandler = (id) => {
      let idx = -1;
      for (let i = 0; i < list.length; i++) {
         if (list[i].id == id) {
            idx = i;
            break;
         }
      }
      if (idx > -1) {
         setList(list => list.slice(0, idx).concat(list.slice(idx + 1, list.length)));
      }
   }
    
    return (
     <div>
        <h2>TODO LIST</h2>
        <TodoList list={list} onDelete={deleteHandler}/>
        <AddTodo onAdd={addHandler}/>
     </div>
    )
    
}
