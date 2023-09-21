import React, { useEffect, useState } from 'react'

const P06UseEffectHook = () => {
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(0);
    useEffect(()=>{
        console.log("useeffect is working");
    },[count2]);
  return (
    <div>
        <p>P06UseEffectHook</p>
        {count}
        <button onClick={()=>setCount(count+1)}>Counter+</button>
        {count2}        
        <button onClick={()=>setCount2(count2+1)}>Counter2+</button>
    </div>
  )
}

export default P06UseEffectHook