import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from '../action'

const IncDec = () => {
    const myState = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <div className="main">
                    <button onClick={() => dispatch(decNumber())}>-</button>
                    <h2>{myState}</h2>
                    <button onClick={() => dispatch(incNumber())}>+</button>
                </div>
            </div>

        </>
    )
}

export default IncDec