import React, {useState} from 'react'

//Simple count component using with useState()
const CounterNor = () => {
    const [count, setCount] = useState(0)
    return(
        <>
            <h3>
                {count} 
            </h3>
            <button onClick={()=> setCount(count + 1)}>Update</button>
        </>
    )
}

export default CounterNor