import React from 'react';

export default function Todo(props)
{
    return (
        <div>
            <label>
           <input type="checkbox" checked = {props.todo.done}/>
            {props.todo}
            </label>
        </div>
    );
}