import React, { useState } from 'react'

function TodoNewtodo(props) {
    const submitHandler=(e)=>{
        e.preventDefault();
        
        props.todoadder(todo);

    }
    const [todo,Settodo]=useState('');
    const todoItemHandler=(k)=>{
        Settodo(k.target.value);
        
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' onChange={todoItemHandler} value={todo}></input >
            <button type='submit' >g</button>
        </form>
    </div>
  )
}

export default TodoNewtodo