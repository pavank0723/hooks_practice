import React,{ useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            {/* Updating state based on previous state */}
            <p>Counter {counter}</p>
            <button onClick={() => setCounter((preValue) => preValue + 1)}>+</button>
            <button onClick={() => setCounter((preValue) => preValue ? preValue - 1 : 0)}> - </button>
        </>
    )
}

export default Counter