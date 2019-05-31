import React, { Component } from 'react'
let B = ({match}) =>{
    return (
      <div>
        b页
        {match.params.num}
      </div>
    )
}
export default B;