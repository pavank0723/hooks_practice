import React, { PureComponent } from 'react'

export default class ClassState extends PureComponent { //Solution: Component -> PureComponent

    constructor() {
        super()
        this.state = {
            count1: 1,
            count2: 1
        }
    }
    render() {
        console.log("Class State Check rendering...")
        return (
            <>
                <h1>Class with State</h1>
                <hr />
                <h2>
                    Count1: {this.state.count1}
                </h2>
                <p>Without increment</p>
                {/* 
            Problem 1: {this.setState({count1:1})} =====> continuous rendering
            Problem 2: {this.setState({count1:this.state.count})} =====> continuous rendering
            
            */}
                <button onClick={() => { this.setState({ count1: this.state.count1 }) }}>Update</button>

                <h2>
                    Count2: {this.state.count2}
                </h2>
                <p>With increment</p>
                {/* 
            Problem 1: {this.setState({count2:1})} =====> continuous rendering
            Problem 2: {this.setState({count2:this.state.count})} =====> continuous rendering
            
            */}
                <button onClick={() => { this.setState({ count2: this.state.count2 + 1 }) }}>Update</button>


            </>

        )
    }
}
