import React, {useState} from "react";


function AddTodo({createTodo}){

    const[value, setValue] = useState('')

    const handleAddPerson =(e)=>{
        e.preventDefault();
        if(value){
            createTodo(value)
            setValue('')
        }
    }


    return(
        <form onSubmit={handleAddPerson}>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo