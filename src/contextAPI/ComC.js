import React from 'react'
import { FirstName } from './ComA'

const ComC = () => {
  return (
    <>
        <FirstName.Consumer>
            {
                (fName) =>{
                    return <h1>Hii <span style={{color:"red"}}>{fName}</span></h1>
                }
            }
        </FirstName.Consumer>
    </>
  )
}

export default ComC