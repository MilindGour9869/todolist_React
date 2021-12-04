import React from 'react';
import Todo from "./Todo"

export default function TodoList(props){
    return (
        props.todos.map(
            val =>{
                console.log(val.id)
                return <Todo id ={val.id} todo = {val.name} checked = {val.done}  click={props.checked}/> 
            }
        )
  
    );
}