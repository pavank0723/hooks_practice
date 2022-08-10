import React from 'react'
import { FirstName,LastName } from './ComA'

const ComC = () => {
  return (
    <>
        <FirstName.Consumer>
            {
                (fName) =>{
                    return (
                        <LastName.Consumer>
                        {
                            (lName) =>{
                                return <h1>Hii <span style={{color:"red"}}>{fName}</span>{lName}</h1>
                            }
                        }
                        </LastName.Consumer>
                        
                    )
                }
            }
        </FirstName.Consumer>
    </>
  )
}

export default ComC