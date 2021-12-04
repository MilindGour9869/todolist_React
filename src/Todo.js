import React from 'react';

export default function Todo(props)
{
    function handle()
    {    
        props.click(props.id);
    }
    return (
        <div>
            <label>
           <input type="checkbox" checked = {props.checked} onChange = {handle}/>
            {props.todo}
            {props.no}
            </label>
        </div>
    );
}