import React, { Component } from 'react'
let D = (props) =>{
    console.log(props);
    return (
      <div>
        { props.match ? '111':'000'}
      </div>
    )
}
export default D;