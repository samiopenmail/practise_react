import React,{useState} from 'react'

export default function FORMfunBased() {
    const [name,setName]=useState('');  
    const [email,setEmail]=useState(''); 
    const [password,setPassword]=useState('');           
    const handleSubmit=(e)=>{
        console.log(name,email,password);
        e.preventDefault();

    }
    const handleName=(e)=>{
        setName(e.target.value);
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    } 
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <input type='text'  name='name' onChange={handleName} value={name}></input>
            </div>

            <div>
            <label>Email:</label>
            <input type='email'   name='email' onChange={handleEmail} value={email}></input>
            </div>

            <div>
            <label>Password:</label>
            <input type='password' name='password' onChange={handlePassword} value={password}></input>
            </div>
            <div>
            <label>Submit:</label>
            <input type='submit' name='submit'></input>
            </div>
        </form>
    </div>
  )
}
