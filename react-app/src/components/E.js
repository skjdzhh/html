import React, { Component } from 'react'

export default class E extends Component {
  render() {
    return (
      <div>
        <button onClick={() =>{
            this.props.history.go(-1);
        }}></button>
        <button onClick={
        () =>{
                this.props.history.go(1);
            }
        }></button>
      </div>
    )
  }
}
