import React from 'react'

const data = ['Pavan','Praveen','Priyanka','Siya']
const ArrayData = () =>{
    return(
        <>
        {
            data.map((item) =>{
                return(
                    <h1>Name: {item}</h1>
                )
            })
        }

        {/* {
            for(let i =0; i<data.length; i++){
                <h1>{data[i]}</h1>
            } //Showing error
        } */}
        </>
    )
}

export default ArrayData