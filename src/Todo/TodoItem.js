import React, {useContext} from "react";
import Context from "../context";




export function TodoItem({ index, todos, onChange }) {
    const{removeTodo} = useContext(Context)
    return (

        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '.5rem' }}
        >
            <span>
                <input type="checkbox" onChange={()=>onChange(todos.id)} checked={todos.completed}/>
                <strong >{index + 1}</strong>
                {todos.title}
            </span>
            <button onClick={()=> removeTodo(todos.id)}>&times;</button>
        </li>
    )
}



export default TodoItem