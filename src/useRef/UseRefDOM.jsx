import React, { useRef } from 'react'
const UseRefDOM = () => {
    
    const innerRef = useRef('')

    const changeBg = () =>{
        innerRef.current.style.backgroundColor = innerRef.current.value
    }
    
    return(
        <>
            <input ref={innerRef} autoFocus type='text' placeholder='Please enter the name of the Color' />
            <button onClick={() => changeBg()}>Click me</button>
        </>
    )
}

export default UseRefDOM