import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state,action) =>{

    // console.log(state,action)
    
    if(action.type === 'INCREMENT'){
        return state + 1
    }
    
    if(action.type === 'DECREMENT'){
        if(state > 0){
            return state - 1
        }   
    }
    return state
}

const CounterReducer = () => {
    //useReducer() -> Advanced version of === useState() === it is use only in major projects
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
        <p>
            {state}
        </p>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </>
  )
}

export default CounterReducer