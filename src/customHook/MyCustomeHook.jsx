import React from 'react'
import useWindowScrollPosition from './useWindowScrollPosition'

const MyCustomeHook = () => {
    // Destructing
    const { scrollX, scrollY } = useWindowScrollPosition()
    return (
        <>
            <div style={{textAlign: "center",}}>
                <h1>Hello Custom Hook</h1>
                <h2>
                    scroll Y : {scrollY}
                </h2>
            </div>
        </>
    )
}

export default MyCustomeHook