import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
// let F = withRouter((props) => {
//     console.log(props,"F页输出");
//     return (
//         <div>
//             F页
//             <button onClick={()=>{
//                 props.history.push('/b/6');
//             }}>b页</button>
//         </div>
//     )
// })

class F extends Component{
    render(){
        return (
            <div>
                F页
                <button onClick={()=>{
                    this.props.history.push('/b/6');
                }}>b页</button>
            </div>
        )
    }
}
export default withRouter(F);






