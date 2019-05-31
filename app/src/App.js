import React, { Component } from 'react';
import { BrowserRouter as Router,
   Route,
   Link,
   Switch,
   Redirect,
   withRouter,
   NavLink
  } from 'react-router-dom'
import B from './components/B';
import A from './components/A';
import Home from './components/Home';
import D from './components/D';
import E from './components/E';
import F from './components/F';
import './app.css';
// let Btn = withRouter((props) =>{
//   console.log(props);
//   return (
//     <button onClick={()=>{
//         props.history.push('/a/8')
//       }
//     }>click</button>
//   )
// });



class App extends Component {
  render() {

    return (
      <div className="App">
          <Router>
              <div>
                <F></F>
                <NavLink to="/home" activeClassName="my_active">跳转home页</NavLink>|
                <NavLink to="/b/10">跳转b页</NavLink>|
                <NavLink to="/a/5">跳转a页</NavLink>|
                <NavLink to="/c">跳转c页</NavLink>|
                <NavLink to="/d/1">跳转d页</NavLink>|
                <NavLink to="/e">e页面</NavLink>
                {/* <Route exact path="/" component={Home}></Route>
                <Route path="/b" component={B}></Route>
                <Route path="/a" component={A}></Route> */}

                {/* <Switch> */}
                  <Route exact path="/home" component={Home}></Route>
                  <Route path="/b/:num" component={B}></Route>
                  <Route path="/a/:id" component={A}></Route>
                  {/* <Route path="/c" render={()=>{
                    return <h1>cccc</h1>
                  }}></Route> */}
                  <Route path="/c" render={()=>{
                    return <Redirect to="/"></Redirect>
                  }}></Route>
                  <Route path="/e" component={E}></Route>
                  {/* <Route path="/d/:x" children={D}></Route> */}

                {/* </Switch> */}

               
              </div>
          </Router>
      </div>
    );
  }
}
export default App;
