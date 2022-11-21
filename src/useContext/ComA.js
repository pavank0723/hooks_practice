import React, { createContext } from 'react'
import ComB from './ComB'

const FirstName = createContext();
const LastName = createContext();

const ComA = () => {
    return (
        //Provide the created contexts
        <FirstName.Provider value={"Pavan"}>
            <LastName.Provider value={"Yadav"}>
                <ComB />
            </LastName.Provider>

        </FirstName.Provider>

    )
}

export default ComA
export { FirstName, LastName }