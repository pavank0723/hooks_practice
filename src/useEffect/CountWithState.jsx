import React, { useEffect, useState } from 'react'
const CountWithState = () =>{
    const [count, setCount] = React.useState(0)
    const [item, setItem] = useState(10)

    useEffect(() =>{
        console.log('count: when count update that time render')
    },[count])

    useEffect(() =>{
        console.log('item: when item uodate that time render')
    },[item])
    return(
        <>
        <h1>Count: {count}</h1>
        <h2>Item: {item}</h2><br />

        <button onClick = {() =>setCount(count + 1)}>Update Count</button>
        <button onClick = {() => setItem(item + 1)}>Update Item</button>
        </>
    )
}

export default CountWithState