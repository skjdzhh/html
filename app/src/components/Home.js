import React, { Component } from 'react'
import {Prompt} from 'react-router-dom';
export default class Home extends Component {
    constructor(params) {
        super(params);
        this.state = {
            isWarn:true
        }
    }
  render() {
    return (
        <div>
            home页
            <button onClick={()=>{
                // 下n页 (n>0) 上n页 (n<0)
                // this.props.history.go(n);
                // 下一页
                this.props.history.goForward();
            }}>下一页</button>

            {/* <Prompt when={this.state.isWarn} message={"确定离开页面吗？"}></Prompt> */}
        </div>
    )
  }
}
