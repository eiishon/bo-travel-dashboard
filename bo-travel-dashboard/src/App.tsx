import React from 'react'
import 'antd/dist/antd.less'
import './App.less'
import ReactDOM from "react-dom"
import  Payments from './pages/Payments'
import Home from './pages/Home'

import {   BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/payments">Payments</Link>
            </li>
          </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/payments" component={Payments} />
      </Switch>
    </div>

    </Router>
  );

  
}




export default App
