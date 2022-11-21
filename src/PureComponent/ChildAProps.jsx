import React, { PureComponent } from 'react'

export default class ChildAProps extends PureComponent {
  render() {
    console.log("Child A rendering...")
    return (
      <div>Child A Props : {this.props.count1}</div>
    )
  }
}
