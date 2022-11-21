import React from "react"
import './style_ext.css' // import external css
import myStyle from './style_mod.module.css' // import module style

const MainCSS = () => {
    return (
        <>
            <h1 className="primary">
                Style Type 1 in React JS
            </h1>

            <h1 style={
                // Inline CSS
                {
                    backgroundColor: 'yellow',
                    color: 'red',
                    padding: '50px',
                    margin: '10px'
                }
            }>
                Style Type 2 in React JS
            </h1>

            <h1 className={myStyle.secondery}>Style Type 3 in React JS</h1>
        </>

    )
}

export default MainCSS