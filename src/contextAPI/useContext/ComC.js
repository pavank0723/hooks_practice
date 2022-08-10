import React, { useContext } from 'react'
import { FirstName,LastName } from './ComA'

const ComC = () => {
    const fName = useContext(FirstName);
    const lName = useContext(LastName);
    return (
        <>
            <h1>Hii <span style={{color:"red"}}>{fName}</span> {lName}</h1>
        </>
    )
}

export default ComC