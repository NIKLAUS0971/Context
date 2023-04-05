import React from "react";
import { TodoItem } from "./TodoItem";



function TodoList ({todos, onToggle}){

    const data = todos.map((item, index)=>{
        // const{id, ...itemProps} = item
        return(
            // <TodoItem key={id} {...itemProps} index={index} />
            <TodoItem key={item.id} todos={item} index={index} onChange={onToggle}/>
        )
    })

    return(
        <ul style={{listStyle: 'none',margin: 0, padding: 10}}>
            {data}
        </ul>
    )
}



export default TodoList