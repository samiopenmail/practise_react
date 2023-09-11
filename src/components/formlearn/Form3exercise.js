import React, { useState } from 'react'
function Form3exercise() {
    const [name,setName]=useState('');
    const handleSubmit=(e)=>{
        console.log(name);
        e.preventDefault();
    }
    const handleName=(e)=>{
        setName(e.target.value);
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleName} value={name}></input>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form3exercise