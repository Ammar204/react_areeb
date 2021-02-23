import React from 'react'

export default function(props){
    return(
        <div>
            <h3>id : {props.todoData.id}</h3>
            <p>todo name: {props.todoData.todo}</p>
        </div>
    )
}