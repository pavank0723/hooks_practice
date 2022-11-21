import React, { Component } from 'react'

export default class ChildBProps extends Component {
  render() {
    console.log("Child B rendering...")
    return (
      <div>Child B Props: {this.props.count2}</div>
    )
  }
}
