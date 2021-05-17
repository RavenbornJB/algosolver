import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/login" component={LoginView}/>
              <Route exact path="/register" component={RegisterView}/>
              <Route path="*" component={App}>

              </Route>
          </Switch>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
