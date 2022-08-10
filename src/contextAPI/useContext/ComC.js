import React, { useContext } from 'react'
import { FirstName } from './ComA'

const ComC = () => {
    const fName = useContext(FirstName);
    return (
        <>
            <h1>Hii <span style={{color:"red"}}>{fName}</span></h1>
        </>
    )
}

export default ComC