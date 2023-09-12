import React, { useState } from 'react'

const P04Toggle = () => {
    const [toggle,SetToggle]=useState(false);
  return (
    <div>
        {toggle && (<p>lorem30 text</p>)}
        

        {console.log(toggle)}
        <button onClick={()=>{SetToggle(!toggle)}}>showhide</button>
    </div>
  )
}

export default P04Toggle