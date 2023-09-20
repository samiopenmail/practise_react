import React, { useState } from 'react'

const FAQ = ({id,title,description}) => {
    const [toggler,SetToggler]=useState(false);
  return (
    <div>
        <button onClick={()=>{SetToggler(!toggler)}} >+</button>

        <p>{id}</p>
        <p>{title}</p>
        {toggler && (<p>{description}</p>)}
        <hr/>
    </div>
  )
}

export default FAQ