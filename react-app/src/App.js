import React, { Component } from 'react';
import { BrowserRouter as Router, Route,NevLink,Switch,withRouter} from 'react-router-dom'
import B from './components/B';
import A from './components/A';
import C from './components/C';
import D from './components/D';
import E from './components/E';
import "./app.css";
import Home from './components/Home';
let Btn = withRouter((props) =>{
  return (
    <button onClick={
      () =>{props.history.push('/a/8')}
    }>click</button>
  )  
});

class App extends Component {
  render() {
    return (
      <div>
          <Router>
              <div>
                <Btn></Btn>
                <NevLink to="/a/5">跳转A页</NevLink>|   
                <NevLink to="/b">跳转B页</NevLink>|   
                <NevLink to="/c"> 跳到c页</NevLink>|
                <NevLink to="/d"> 跳到d页</NevLink>|
                <NevLink to="/e">跳到E页</NevLink>|
                <NevLink to="/Home"> 跳到home页</NevLink>|
                <Route path="/a/:id" component={A}></Route>
                <Route path="/b" component={B}></Route>
                <Route path="/c" component={C}></Route>
                <Route exact path="/d" children={D}></Route>
                <Route exact paht="/e" component={E}></Route>
                <Route exact path="/Home" component={Home}></Route>
                
    
                
              </div>
          </Router>
      </div>
    );
  }
}
export default App;
