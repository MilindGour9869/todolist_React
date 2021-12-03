import React from 'react';
import Todo from "./Todo"

export default function TodoList(props){
    return (
        props.todos.map(
            val =>{
                return <Todo key={val.id} todo = {val.name}/> 
            }
        )
  
    );
}