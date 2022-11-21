import React from 'react'
import CounterNor from './CounterNor'
import { HOC_Blue, HOC_Red } from './HOC_Com'
function MainCom(){
    return(
        <>
        <h2>Function Component</h2>
        <HOC_Red cms = {CounterNor()} /> 
        <HOC_Blue cms = {CounterNor()} />
        </>
    )
}

export default MainCom