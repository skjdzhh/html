import React, { Component } from 'react';

class E extends Component {
  render() {
    return (
      <div>
          e页面
          <button onClick={()=>{
            // this.props.history.go(-1);
            // 上一页
            this.props.history.goBack();
          }}>&lt;上一页</button>
          <button onClick={
            ()=>{
              this.props.history.push('/b/50')
            }
          }>回到b页面</button>
      </div>
    );
  }
}

export default E;
