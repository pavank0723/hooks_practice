// 1.	Create a mutable variable which will not re-render the component

// 2.	To access a DOM element directly

import React, { useState, useEffect, useRef } from 'react'

const UseRefTest = () => {
    const [myData, setMyData] = useState('')
    // const [count, setCount] = useState(0)
    
    //Solution 
    const count = useRef(0)
    //Problem
    useEffect(() =>{
        // setCount(count+1)
        count.current = count.current + 1
    })
    return (
        <>
            <h1>useRef used in function component</h1>
            <br />
            <input type="text" value={myData} onChange={(e) => setMyData(e.target.value)} placeholder='please enter the text'/>
            <h1>This is count: {count.current}</h1>
        </>
    )
}

export default UseRefTest