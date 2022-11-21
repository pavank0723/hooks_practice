import React, { useState } from 'react'

const BulbTest = () => {
    const [bulbStatus, setBulbStatus] = useState(false)
    
    return (
        <>
            <p>Bulb is {bulbStatus ? 'ON' : 'OFF'}</p>
            <button onClick={() => setBulbStatus(true)}>ON</button>
            <button onClick={() => setBulbStatus(false)}>OFF</button>
        </>
    )
}

export default BulbTest