import { useFormik } from 'formik'
import React from 'react'

function Formikform() {
    const formiksam=useFormik({
        initialValues:{
            name:'',
        },
        onSubmit:(values)=>{
            console.log(values);
        },
        
    });
  return (
    <div>
        <form onSubmit={formiksam.handleSubmit}>
            <input type='text' onChange={formiksam.handleChange} value={formiksam.values.name}  name='name'></input>
            <button type='submit'>f</button>
        </form>
    </div>
  )
}

export default Formikform