import React, { useMemo, useState } from "react"
const MemoTest = () => {
    // Two ways to use useState or other hooks 😃
    // Way 1️⃣
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)
    // Way 2️⃣
    // const [count, setCount] = React.useState(0)

    // Problem
    function multiply() {
        console.log("multiply fun")
        return count * 5
    }

    //Solution -> useMemo()
    const multiplyMemo = useMemo(function multiply(){
        console.log("multiply fun")
        return count * 5
    },[count]) //When count variable update then this call
    return (
        <>
            <h1>useMemo()<br /></h1>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <hr />
            {/* <h2>{multiply()}</h2> */} 
            <h2>{multiplyMemo}</h2>
            <hr />
            <h2>Item: {item}</h2>
            <button onClick={() => setItem(item + 10)}>Update Item</button>
        </>
    )
}

export default MemoTest
