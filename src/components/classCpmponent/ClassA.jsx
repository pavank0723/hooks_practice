import React, { Component } from 'react'
import ClassB from './ClassB'

class ClassA extends Component {
  constructor(){
    super()
    console.log("Constructor: Hello, I'm 1st")
    this.state ={
      count : 0
    }
    //Don't call api in Contructor
  }
  componentDidMount(){
    console.log("componentDidMount: I'm 3rd")
    //Call api in Contructor
  }
  
  increment(){
    this.setState({count : this.state.count + 1})
  }
  render() {
    console.log("render: Hello I'm 2nd")
    return (
      <>
        <ClassB number={this.state.count}></ClassB>
        <button onClick={() => this.increment()}>Click me</button>
      </>
    )
  }
}
export default ClassA
