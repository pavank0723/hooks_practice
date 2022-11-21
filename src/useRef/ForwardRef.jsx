import React, { useRef } from 'react'
import UserRef from './UserRef'

const ForwardRef = () => {
    let innerRef = useRef('null')

    function updateData() {
        innerRef.current.value = '100'
        innerRef.current.style.color = 'red'
    }
    return (
        <>
            <h1>forwardRef Example</h1>
            <UserRef ref={innerRef} />
            <button onClick={() => updateData()}>Update</button>
        </>
    )
}

export default ForwardRef