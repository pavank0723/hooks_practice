import React from 'react'

//Wrapper Component 1
export const HOC_Red = ({cms}) => {
    return(
        <>
            <div style={{backgroundColor:"red"}}> Red {cms} </div>
        </>
    )
}

//Wrapper Component 2
export const HOC_Blue = ({cms}) => {
    return(
        <>
            <div style={{backgroundColor: "blue"}}>Blue {cms}</div>
        </>
    )
}

