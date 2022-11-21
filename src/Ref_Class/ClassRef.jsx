import React, { createRef } from 'react'
class ClassRef extends React.Component {
    constructor() {
        super()
        this.innerRef = createRef()
    }
    componentDidMount() {
        // console.log(this.innerRef)
    }
    changeBackground(){
        console.log(this.innerRef.current.value)
        this.innerRef.current.style.backgroundColor = 'red'
        this.innerRef.current.style.color = 'white'
    }
    
    render() {
       
        return (
            <>
                <h1> Ref in Class</h1>
                
                <br />
                             
                <input type="text" ref={this.innerRef} placeholder='Please enter something...'/>
                <button onClick={() => this.changeBackground()}>Click me</button>

            </>
        )
    }
}

export default ClassRef
