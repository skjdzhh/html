import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
import B from './components/B';
import A from './components/A';
import C from './components/C';
import D from './components/D';
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
                <Link to="/a/5">跳转A页</Link>   
                <Link to="/b">跳转B页</Link>|   
                <Link to="/c"> 跳到c页</Link>
                <Link to="/d"> 跳到d页</Link>
                <Link to="/"> 跳到home页</Link>
                <Route path="/a/:id" component={A}></Route>
                <Route path="/b" component={B}></Route>
                <Route path="/c" component={C}></Route>
                <Route exact path="/d" children={D}></Route>
                <Route exact path="/" component={Home}></Route>
                
    
                
              </div>
          </Router>
      </div>
    );
  }
}
export default App;
