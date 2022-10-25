import React, { useState } from 'react';


function ToDoItem(props) {
 // ---- Para cada item do array, criamos um `li`
    return ( 
        <div onClick={ () => {
            props.onChecked(props.id)
        } }>
            <li><div className='item'>{props.text}</div></li>
        </div>
    )
}

export default ToDoItem;