import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {socialLogin} from './components/socialLogin.js';
import addName from './components/addName.js';
import Contact from './components/contact.js';
import babyMain from './components/babyMain.js'
import App from './App';
import {Route,Link,BrowserRouter,HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (

    <HashRouter basename="/">
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/view">View names</Link></li>
        <li><Link to ="/add">Add Name</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={socialLogin} />
      <Route path="/view" component={babyMain} />
      <Route path="/add" component={addName}/>
    </div>
  </HashRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
