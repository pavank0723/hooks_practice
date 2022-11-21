//Make a responsive container with childs adapting to screensize

import React from 'react'
import './myStyle.css'

export const Responsive = () => {
    return (
        <>
            <div className='parent'>
                <div className='child'>1</div>
                <div className='child'>2</div>
                <div className='child'>3</div>
                <div className='child'>4</div>
                <div className='child'>5</div>
                <div className='child'>6</div>
                <div className='child'>7</div>
                <div className='child'>8</div>
                <div className='child'>9</div>
                <div className='child'>10</div>
                <div className='child'>11</div>
                <div className='child'>12</div>

            </div>

            <div className='cn'>
                <div className='inner'>Hi</div>

            </div>
        </>
    )
}
