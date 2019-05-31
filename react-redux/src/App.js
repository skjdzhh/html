import React, { Component } from 'react';

import store from './store';
import action from './action';
import {connect} from 'react-redux';
class App extends Component {
    constructor(params) {
        super(params);
        this.addHandler = this.addHandler.bind(this);
    }
    addHandler(){
        console.log('add');
        // store.dispatch 触发action
        store.dispatch(action(2));
    }
    render() {
        return (
            <div>
                {this.props.count}
                <button onClick={
                    this.addHandler
                }>click</button>
            </div>
        );
    }
}
let mapStatetoProps = (state) =>{
  return {
      count:state.count
 }
}
export default connect(mapStatetoProps)(App);


