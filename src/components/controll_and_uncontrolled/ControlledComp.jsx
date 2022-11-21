import React from 'react'
function ControlledComp(){
    const [val, setVal] = React.useState('')
    return(
        <>
            <h1>Controlled Component</h1>
            <input type='text' value={val} onChange={(e) => setVal(e.target.value)} autoFocus />
            <p><b>Value:</b> {val}</p>
        
        </>
    )
}

export default ControlledComp