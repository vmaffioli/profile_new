import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './pages/Profile/App';
import Isa from './pages/Isa';
import './style.css';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(

  <Router>
    <Route exact path="/" component={App} />
    <Route path="/isa" component={Isa} />
  </Router>,

  document.getElementById('root')


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
