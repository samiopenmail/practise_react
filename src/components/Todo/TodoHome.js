import React, { useState } from 'react'
import TodoNewtodo from './TodoNewtodo'
function TodoHome() {
    

    const dummytodos=['todo1','todo2'];
    const [todos,SetTodos]=useState(dummytodos);

    const items=dummytodos.map((itm,ind)=>(
        <li key={ind}>{itm}</li>    
    ));
    const ItemadderHome=(e)=>{
      //console.log(e);
      SetTodos([...todos,e]);
      
  }
  return (
    <div>
        <ul>
          {todos.map((item,indx)=>(
            <li key={indx}>{item}</li>
          ))}
        </ul>
        <TodoNewtodo todoadder={ItemadderHome} />

    </div>
  )
}

export default TodoHome