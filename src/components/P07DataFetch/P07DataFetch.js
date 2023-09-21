import React, { useEffect, useState } from 'react'

const P07todosFetch = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/')
                .then((resp) => { return resp.json() })
                .then((dt) => { setTodos(dt) ;setIsloading(false)});

        }, 3000);
    }, [todos]);

    return (
        <div>
            <p>P07todosFetch</p>
            {isLoading && "Loading..."}
            {todos && todos.map((dti) => { return <p key={dti.id}> {dti.title} </p> })}

        </div>
    )
}

export default P07todosFetch