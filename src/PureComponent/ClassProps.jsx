import React, { PureComponent } from 'react'
import ChildAProps from './ChildAProps'
import ChildBProps from './ChildBProps'

export default class ClassProps extends PureComponent { //Solution: Component -> PureComponent

    constructor() {
        super()
        this.state = {
            count1: 1,
            count2: 1
        }
    }
    render() {
        console.log("Class Props Check rendering...")
        return (
            <>
                <h1>Class with Props</h1>
                <hr />
                <h2>
                    <ChildAProps count1={this.state.count1} />
                </h2>
                <p>Without increment</p>
                {/* continuous rendering
            Problem 1: {this.setState({count1:1})} 
            Problem 2: {this.setState({count1:this.state.count})} 
            */}
                <button onClick={
                    () => {
                        this.setState({ count1: this.state.count1 })
                    }
                }>Update</button>

                <h2>
                    <ChildBProps count2={this.state.count2} />
                </h2>
                <p>With increment</p>
                {/* 
            Problem 1: {this.setState({count2:1})} =====> continuous rendering
            Problem 2: {this.setState({count2:this.state.count})} =====> continuous rendering
            
            */}
                <button onClick={
                    () => {
                        this.setState({ count2: this.state.count2 + 1 })
                    }
                }>Update</button>


            </>

        )
    }
}
