import React, { useEffect } from 'react'

const CountEffect = () =>{
    const [count, setCount] = React.useState(0)

    useEffect(() =>{
        console.log('Count1 render')
    },[]) // render only once

    useEffect(() =>{
        console.log('Count2 render')
    },[count]) // render when count update

    return(
        <>
            <h1>Count effect : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </>
    )
}

export default CountEffect