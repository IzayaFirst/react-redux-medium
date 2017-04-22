import React from 'react';
import ReactDOM from 'react-dom';
import Navs from './Component/Navs';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
ReactDOM.render(
    <Router>
      <div>
        <Route path="/" component={Navs}/>
      </div>
    </Router>,
  document.getElementById('root')
);
